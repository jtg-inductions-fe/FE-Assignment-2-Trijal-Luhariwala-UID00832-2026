/**
 * Application route paths.
 * @constant
 */
export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    PROFILE: '/profile',
    SUGGESTIONS: '/suggestions',
    NOT_FOUND: '*',
} as const;

export const getUserDetailRoute = (username: string): string =>
    `/user/${encodeURIComponent(username)}`;
