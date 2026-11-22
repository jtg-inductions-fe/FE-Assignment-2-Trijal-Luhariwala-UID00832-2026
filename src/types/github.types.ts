export interface GitHubUser {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    name: string | null;
    location: string | null;
    email: string | null;
    bio: string | null;
    blog: string | null;
    followers: number;
    following: number;
}

export interface GitHubSearchResponse {
    total_count: number;
    incomplete_results: boolean;
    items: Pick<GitHubUser, 'id' | 'login' | 'avatar_url' | 'html_url'>[];
}
