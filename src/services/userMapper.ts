import type { SearchUserItem, SearchUsersResponse, User } from '@types';

export interface GitHubUserResponse {
    id: number;
    login: string;
    name: string | null;
    avatar_url: string;
    html_url: string;
    bio: string | null;
    location: string | null;
    blog: string | null;
    email: string | null;
    followers: number;
    following: number;
    public_repos: number;
    created_at: string;
}

export interface GitHubSearchUsersResponse {
    total_count: number;
    items: {
        id: number;
        login: string;
        avatar_url: string;
        html_url: string;
    }[];
}

export const mapGitHubUser = (u: GitHubUserResponse): User => ({
    id: u.id,
    login: u.login,
    name: u.name,
    avatarUrl: u.avatar_url,
    profileUrl: u.html_url,
    bio: u.bio,
    location: u.location,
    blog: u.blog,
    email: u.email,
    followers: u.followers,
    following: u.following,
    publicRepos: u.public_repos,
    createdAt: u.created_at,
});

export const mapGitHubSearchUsers = (
    res: GitHubSearchUsersResponse,
): SearchUsersResponse => ({
    totalCount: res.total_count,
    items: res.items.map(
        (item): SearchUserItem => ({
            id: item.id,
            login: item.login,
            avatarUrl: item.avatar_url,
            profileUrl: item.html_url,
        }),
    ),
});
