declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_DEFAULT_LANGUAGE: string;
      NEXT_PUBLIC_COUNTRIES_API: string;
    }
  }
}

export {};
