import { ROUTES } from './routeConstants';

/**
 * LocalStorage keys for persisting authentication state.
 * @constant
 */
export const STORAGE_KEYS = {
    AUTH_TOKEN: 'github_pat',
    AUTH_USER: 'github_user',
} as const;

/**
 * GitHub REST API endpoint paths.
 * @constant
 */
export const API_ENDPOINTS = {
    AUTH_USER: '/user',
    USERS: '/users',
    SEARCH_USERS: '/search/users',
} as const;

/**
 * General behavior limits and defaults for the app.
 * @constant
 */
export const APP_CONFIG = {
    APP_NAME: 'GitHub Explorer',
    DEFAULT_API_URL: 'https://api.github.com',
    DEFAULT_TIMEOUT_MS: 10000,
    SEARCH_RESULTS_PER_PAGE: 10,
    SUGGESTIONS_LIMIT: 8,
} as const;

/**
 * Standardized error messages displayed in the UI.
 * @constant
 */
export const ERROR_MESSAGES = {
    INVALID_PAT:
        'Invalid Personal Access Token. Please check your token and try again.',
    USERNAME_MISMATCH:
        'The entered username does not match this Personal Access Token.',
    USER_NOT_FOUND: 'No GitHub user found matching that username.',
    RATE_LIMIT:
        'GitHub API rate limit exceeded. Log in with a PAT or try again later.',
    NETWORK_ERROR: 'Network error. Please check your connection and try again.',
    GENERIC: 'Something went wrong. Please try again.',
    FORBIDDEN: 'Access forbidden. Check your token permissions and try again.',
    VALIDATION_ERROR:
        'Invalid search query or request parameters. Please refine your input.',
} as const;

export interface NavItem {
    label: string;
    path: string;
}

export const BASE_NAV_ITEMS: readonly NavItem[] = [
    { label: 'Search', path: ROUTES.HOME },
];

export const AUTH_ONLY_NAV_ITEMS: readonly NavItem[] = [
    { label: 'Suggestions', path: ROUTES.SUGGESTIONS },
    { label: 'Profile', path: ROUTES.PROFILE },
];

export const getNavItems = (isAuthenticated: boolean): readonly NavItem[] =>
    isAuthenticated
        ? [...BASE_NAV_ITEMS, ...AUTH_ONLY_NAV_ITEMS]
        : BASE_NAV_ITEMS;
