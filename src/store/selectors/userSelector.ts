import { APP_CONFIG } from '@constant';

import type { RootState } from '../index';

export const selectUserSearch = (state: RootState) => state.user.search;

export const selectSearchTotalPages = (state: RootState) =>
    Math.ceil(
        Math.min(state.user.search.totalCount, 100) /
            APP_CONFIG.SEARCH_RESULTS_PER_PAGE,
    );

export const selectUserDetail = (state: RootState) => state.user.detail;
