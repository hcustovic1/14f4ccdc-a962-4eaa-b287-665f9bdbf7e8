import { renderHook } from '@testing-library/react';
import { useLocalizationStore } from './useLocalizationStore';
import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';

describe('useLanguageStore', () => {
  it('should return the initial state', () => {
    const { result } = renderHook(() => useLocalizationStore());
    expect(result.current.language).toBe('en');
  });

  it('should change the language', async () => {
    const { result } = renderHook(() => useLocalizationStore());

    const newLanguage = 'de';

    act(() => result.current.setLanguage(newLanguage));

    expect(result.current.language).toBe(newLanguage);
  });

  it('should change the shouldShowLanguagePicker value', async () => {
    const { result } = renderHook(() => useLocalizationStore());

    act(() => result.current.setShouldShowLanguagePicker(true));

    expect(result.current.shouldShowLanguagePicker).toBe(true);
  });
});
