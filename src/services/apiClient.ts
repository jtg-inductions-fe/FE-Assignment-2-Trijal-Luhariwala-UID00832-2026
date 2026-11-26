import axios, { type AxiosResponse } from 'axios';

import { APP_CONFIG, ERROR_MESSAGES, STORAGE_KEYS } from '@constant';

interface GitHubErrorBody {
    message?: string;
}

type UnauthorizedHandler = () => void;

let onUnauthorizedHandler: UnauthorizedHandler | null = null;

export const setUnauthorizedHandler = (
    handler: UnauthorizedHandler | null,
): void => {
    onUnauthorizedHandler = handler;
};

export class ApiError extends Error {
    readonly status: number | null;

    constructor(message: string, status: number | null = null) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
    }
}

const isRateLimitResponse = (
    response: AxiosResponse<GitHubErrorBody>,
): boolean => {
    const headers = response.headers as Record<string, unknown>;
    const remaining = headers['x-ratelimit-remaining'];
    const retryAfter = headers['retry-after'];
    const apiMessage = response.data?.message?.toLowerCase() ?? '';
    return (
        String(remaining) === '0' ||
        Boolean(retryAfter) ||
        apiMessage.includes('rate limit')
    );
};

const mapResponseToMessage = (
    response: AxiosResponse<GitHubErrorBody>,
): string => {
    switch (response.status) {
        case 401:
            return ERROR_MESSAGES.INVALID_PAT;
        case 403:
            return isRateLimitResponse(response)
                ? ERROR_MESSAGES.RATE_LIMIT
                : ERROR_MESSAGES.FORBIDDEN;
        case 404:
            return ERROR_MESSAGES.USER_NOT_FOUND;
        case 422:
            return ERROR_MESSAGES.VALIDATION_ERROR;
        case 429:
            return ERROR_MESSAGES.RATE_LIMIT;
        default:
            return ERROR_MESSAGES.GENERIC;
    }
};

const envBaseUrl = import.meta.env.VITE_GITHUB_API_URL?.trim();
const envTimeout = Number(import.meta.env.VITE_API_TIMEOUT);

const baseURL = envBaseUrl || APP_CONFIG.DEFAULT_API_URL;
const timeout =
    Number.isFinite(envTimeout) && envTimeout > 0
        ? envTimeout
        : APP_CONFIG.DEFAULT_TIMEOUT_MS;

export const apiClient = axios.create({
    baseURL,
    timeout,
    headers: {
        Accept: 'application/vnd.github+json',
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error: unknown) => {
        if (axios.isCancel(error)) {
            return Promise.reject(error);
        }

        if (axios.isAxiosError<GitHubErrorBody>(error)) {
            const axiosError = error;
            const response = axiosError.response;
            const status = response?.status ?? null;

            if (status === 401) {
                localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
                localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
                onUnauthorizedHandler?.();
            }

            const message = response
                ? mapResponseToMessage(response)
                : ERROR_MESSAGES.NETWORK_ERROR;

            return Promise.reject(new ApiError(message, status));
        }

        return Promise.reject(new ApiError(ERROR_MESSAGES.GENERIC));
    },
);
