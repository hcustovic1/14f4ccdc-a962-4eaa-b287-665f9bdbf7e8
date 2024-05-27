import { useLanguageStore } from './useLanguageStore';
import { describe, it, expect, beforeEach } from 'vitest';

describe('useLanguageStore', () => {
  
  beforeEach(() => {
      useLanguageStore.setState({ language: 'en' });
  });

  it('should return the initial state', () => {
    expect(useLanguageStore.getState().language).toBe('en');
  });

  it('should change the language', () => {
    const newLanguage = 'de';

    useLanguageStore.getState().setLanguage(newLanguage);

    const state = useLanguageStore.getState();
    expect(state.language).toBe(newLanguage);
  });
});
