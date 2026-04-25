// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVICE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
  interface ProcessEnv {
    VITE_SERVICE_URL: string;
  }
}