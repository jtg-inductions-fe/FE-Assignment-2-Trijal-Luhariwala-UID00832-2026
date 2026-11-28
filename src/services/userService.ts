import { APP_CONFIG } from '@constant';
import type { SearchUsersResponse, User } from '@types';

import { apiClient,ApiError } from './apiClient';
import {
    type GitHubSearchUsersResponse,
    type GitHubUserResponse,
    mapGitHubSearchUsers,
    mapGitHubUser,
} from './userMapper';

export const searchUsers = async (
    query: string,
    page = 1,
): Promise<SearchUsersResponse> => {
    const { data } = await apiClient.get<GitHubSearchUsersResponse>(
        '/search/users',
        {
            params: {
                q: query,
                per_page: APP_CONFIG.SEARCH_RESULTS_PER_PAGE,
                page,
            },
        },
    );
    return mapGitHubSearchUsers(data);
};

export const getUserByUsername = async (username: string): Promise<User> => {
    const { data } = await apiClient.get<GitHubUserResponse>(
        `/users/${encodeURIComponent(username)}`,
    );
    return mapGitHubUser(data);
};

export const checkIsFollowing = async (username: string): Promise<boolean> => {
    try {
        await apiClient.get(`/user/following/${encodeURIComponent(username)}`);
        return true;
    } catch (error) {
        if (error instanceof ApiError && error.status === 404) {
            return false;
        }
        throw error;
    }
};

export const followUser = async (username: string): Promise<void> => {
    await apiClient.put(`/user/following/${encodeURIComponent(username)}`);
};

export const unfollowUser = async (username: string): Promise<void> => {
    await apiClient.delete(`/user/following/${encodeURIComponent(username)}`);
};
