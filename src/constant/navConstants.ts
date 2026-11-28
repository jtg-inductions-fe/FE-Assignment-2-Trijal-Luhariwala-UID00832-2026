import { type NavItem } from '@types';

import { ROUTES } from './routeConstants';

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
