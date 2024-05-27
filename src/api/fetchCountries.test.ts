import { vi, describe, it, expect } from 'vitest';
import { fetchCountries } from './fetchCountries';
import { Fetch } from '@/types';
import { mockCountries } from '@/__mocks__/countriesMock';

describe('useFetchCountries', () => {
  it('should fetch countries data successfully', async () => {
    const fetchMock = vi
      .fn<Parameters<Fetch>, ReturnType<Fetch>>()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockCountries,
      } as Response);

    const countries = await fetchCountries(fetchMock);

    expect(countries).toEqual(mockCountries);
  });

  it('should throw an error when fetch call fails', async () => {
    const fetchMock = vi
      .fn<Parameters<Fetch>, ReturnType<Fetch>>()
      .mockResolvedValueOnce({
        ok: false,
      } as Response);

    await expect(fetchCountries(fetchMock)).rejects.toThrow(
      'Failed to fetch countries data!'
    );
  });
});
