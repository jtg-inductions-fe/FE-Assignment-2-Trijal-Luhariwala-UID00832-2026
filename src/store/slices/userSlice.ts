import { ERROR_MESSAGES } from '@constant';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    checkIsFollowing,
    followUser,
    getUserByUsername,
    searchUsers,
    unfollowUser,
} from '@services';
import type { SearchUserItem, User } from '@types';

export interface UserState {
    search: {
        query: string;
        items: SearchUserItem[];
        totalCount: number;
        currentPage: number;
        hasSearched: boolean;
        isLoading: boolean;
        error: string | null;
    };
    detail: {
        user: User | null;
        isFollowing: boolean;
        isLoading: boolean;
        isFollowLoading: boolean;
        error: string | null;
    };
}

const initialState: UserState = {
    search: {
        query: '',
        items: [],
        totalCount: 0,
        currentPage: 1,
        hasSearched: false,
        isLoading: false,
        error: null,
    },
    detail: {
        user: null,
        isFollowing: false,
        isLoading: false,
        isFollowLoading: false,
        error: null,
    },
};

const getError = (err: unknown) =>
    err instanceof Error ? err.message : ERROR_MESSAGES.GENERIC;

export const searchGitHubUsers = createAsyncThunk(
    'user/search',
    async (
        { query, page = 1 }: { query: string; page?: number },
        { rejectWithValue },
    ) => {
        try {
            const data = await searchUsers(query, page);
            return { query, page, ...data };
        } catch (err) {
            return rejectWithValue(getError(err));
        }
    },
);

export const fetchUserDetail = createAsyncThunk(
    'user/fetchDetail',
    async (
        { username, checkFollow }: { username: string; checkFollow: boolean },
        { rejectWithValue },
    ) => {
        try {
            const [user, isFollowing] = await Promise.all([
                getUserByUsername(username),
                checkFollow ? checkIsFollowing(username) : false,
            ]);
            return { user, isFollowing };
        } catch (err) {
            return rejectWithValue(getError(err));
        }
    },
);

export const toggleFollowUser = createAsyncThunk(
    'user/toggleFollow',
    async (
        { username, isFollowing }: { username: string; isFollowing: boolean },
        { rejectWithValue },
    ) => {
        try {
            if (isFollowing) {
                await unfollowUser(username);
                return false;
            }
            await followUser(username);
            return true;
        } catch (err) {
            return rejectWithValue(getError(err));
        }
    },
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearSearch: (state) => {
            state.search = initialState.search;
        },
        clearUserDetail: (state) => {
            state.detail = initialState.detail;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchGitHubUsers.pending, (state) => {
                state.search.isLoading = true;
                state.search.error = null;
            })
            .addCase(searchGitHubUsers.fulfilled, (state, { payload }) => {
                state.search.query = payload.query;
                state.search.currentPage = payload.page;
                state.search.items = payload.items;
                state.search.totalCount = payload.totalCount;
                state.search.hasSearched = true;
                state.search.isLoading = false;
            })
            .addCase(searchGitHubUsers.rejected, (state, action) => {
                state.search.isLoading = false;
                state.search.error =
                    (action.payload as string) ?? ERROR_MESSAGES.GENERIC;
            })
            .addCase(fetchUserDetail.pending, (state) => {
                state.detail.isLoading = true;
                state.detail.error = null;
            })
            .addCase(fetchUserDetail.fulfilled, (state, { payload }) => {
                state.detail.user = payload.user;
                state.detail.isFollowing = payload.isFollowing;
                state.detail.isLoading = false;
            })
            .addCase(fetchUserDetail.rejected, (state, action) => {
                state.detail.user = null;
                state.detail.isLoading = false;
                state.detail.error =
                    (action.payload as string) ?? ERROR_MESSAGES.GENERIC;
            })
            .addCase(toggleFollowUser.pending, (state) => {
                state.detail.isFollowLoading = true;
                state.detail.error = null;
            })
            .addCase(toggleFollowUser.fulfilled, (state, { payload }) => {
                state.detail.isFollowLoading = false;
                state.detail.isFollowing = payload;
                if (state.detail.user) {
                    state.detail.user.followers += payload ? 1 : -1;
                }
            })
            .addCase(toggleFollowUser.rejected, (state, action) => {
                state.detail.isFollowLoading = false;
                state.detail.error =
                    (action.payload as string) ?? ERROR_MESSAGES.GENERIC;
            });
    },
});

export const { clearSearch, clearUserDetail } = userSlice.actions;
export const userReducer = userSlice.reducer;
