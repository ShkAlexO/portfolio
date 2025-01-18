/// <reference types="vite/client" />

export type ImportMetaEnv = {
    VITE_BASE_URL: string;
}

export type ImportMeta = {
    readonly env: ImportMetaEnv;
}
