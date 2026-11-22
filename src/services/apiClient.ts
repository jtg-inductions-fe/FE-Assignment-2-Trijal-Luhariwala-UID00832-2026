import axios from 'axios';

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_GITHUB_API_URL,
    timeout: Number(import.meta.env.VITE_API_TIMEOUT),
    headers: {
        Accept: 'application/vnd.github+json',
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('github_pat');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
