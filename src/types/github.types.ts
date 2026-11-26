export interface User {
    id: number;
    login: string;
    name: string | null;
    avatarUrl: string;
    profileUrl: string;
    bio: string | null;
    location: string | null;
    blog: string | null;
    email: string | null;
    followers: number;
    following: number;
    publicRepos: number;
    createdAt: string;
}

export interface SearchUserItem {
    id: number;
    login: string;
    avatarUrl: string;
    profileUrl: string;
}

export interface SearchUsersResponse {
    totalCount: number;
    items: SearchUserItem[];
}
