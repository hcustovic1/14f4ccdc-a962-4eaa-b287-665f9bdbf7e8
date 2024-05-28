import { useLocalizationStore } from './useLocalizationStore';
import { describe, it, expect, beforeEach } from 'vitest';

describe('useLanguageStore', () => {
  beforeEach(() => {
    useLocalizationStore.setState({ language: 'en' });
  });

  it('should return the initial state', () => {
    expect(useLocalizationStore.getState().language).toBe('en');
  });

  it('should change the language', () => {
    const newLanguage = 'de';

    useLocalizationStore.getState().setLanguage(newLanguage);

    const state = useLocalizationStore.getState();
    expect(state.language).toBe(newLanguage);
  });
});
