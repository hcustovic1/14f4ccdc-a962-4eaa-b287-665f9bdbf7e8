import { fetchCountries } from '@/api/fetchCountries';
import { renderHook, waitFor } from '@testing-library/react';
import { Mock, afterEach, describe, expect, it, vi } from 'vitest';
import { useFetchCountries } from './useFetchCountries';
import { mockCountries } from '@/__mocks__/countriesMock';

vi.mock('../api/fetchCountries');

describe('useFetchCountries', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch the countries from api and update the state', async () => {
    (fetchCountries as Mock).mockResolvedValue(mockCountries);

    const { result } = renderHook(() => useFetchCountries());

    await waitFor(() => {
      expect(result.current.countries).toEqual(mockCountries);
      expect(result.current.error).toBeNull();
    });
  });

  it('should handle fetch error scenario correctly and set the error object', async () => {
    const mockError = new Error('Failed to fetch countries');

    (fetchCountries as Mock).mockRejectedValue(mockError);

    const { result } = renderHook(() => useFetchCountries());

    await waitFor(() => {
      expect(result.current.countries).toEqual([]);
      expect(result.current.error).toEqual(mockError);
    });
  });
});
