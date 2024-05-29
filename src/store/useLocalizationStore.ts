import { create } from 'zustand';

interface LocalizationState {
  language: string;
  setLanguage: (newLanguage: string) => void;
  shouldShowLanguagePicker: boolean;
  setShouldShowLanguagePicker: (shouldShowLanguagePicker: boolean) => void;
}

export const useLocalizationStore = create<LocalizationState>((set) => ({
  language: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE || 'en',
  setLanguage: (newLanguage: string) => set({ language: newLanguage }),
  shouldShowLanguagePicker: false,
  setShouldShowLanguagePicker: (shouldShowLanguagePicker: boolean) =>
    set({ shouldShowLanguagePicker }),
}));
