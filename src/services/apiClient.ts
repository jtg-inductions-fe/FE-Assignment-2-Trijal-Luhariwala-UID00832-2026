import axios from 'axios';

import { APP_CONFIG, STORAGE_KEYS } from '@constant';

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
