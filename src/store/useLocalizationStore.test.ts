import { renderHook } from '@testing-library/react';
import { useLocalizationStore } from './useLocalizationStore';
import { describe, it, expect, beforeEach } from 'vitest';
import { Country } from '@/types';
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

  it('should update countries', async () => {
    const { result } = renderHook(() => useLocalizationStore());

    const newCountries: Partial<Country>[] = [
      { name: 'Germany', 'alpha-2': 'DE' },
    ];
    act(() => result.current.setCountries(newCountries as Country[]));

    expect(result.current.countries).toEqual(newCountries);
  });
});
