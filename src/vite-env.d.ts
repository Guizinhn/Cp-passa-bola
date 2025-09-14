/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAPIDAPI_KEY: string;
  // Adicione outras variáveis de ambiente personalizadas do Vite aqui, se tiver
  // Por exemplo: readonly VITE_OUTRA_VAR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}