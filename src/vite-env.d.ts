/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_PORT: string;
    readonly VITE_GITHUB_API_URL: string;
    readonly VITE_API_TIMEOUT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
