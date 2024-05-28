import { Country } from '@/types';
import { create } from 'zustand';

interface LocalizationState {
  language: string;
  setLanguage: (newLanguage: string) => void;
  countries: Country[];
  setCountries: (countries: Country[]) => void;
}

export const useLocalizationStore = create<LocalizationState>((set) => ({
  language: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE || 'en',
  setLanguage: (newLanguage: string) => set({ language: newLanguage }),
  countries: [],
  setCountries: (countries: Country[]) => set({ countries }),
}));
