import { create } from 'zustand';

interface LanguageState {
  language: string;
  setLanguage: (newLanguage: string) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE || 'en',
  setLanguage: (newLanguage: string) => set({ language: newLanguage }),
}));
