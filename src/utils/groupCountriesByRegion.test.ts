import { describe, expect, it } from 'vitest';
import { groupCountriesByRegion } from './groupCountriesByRegion';
import { Country } from '@/types';

describe('groupCountriesByRegion', () => {
  it('groups countries by region', () => {
    const countries: Pick<Country, 'id' | 'name' | 'region'>[] = [
      { id: 1, name: 'Country1', region: 'Region1' },
      { id: 2, name: 'Country2', region: 'Region1' },
      { id: 3, name: 'Country3', region: 'Region2' },
      { id: 4, name: 'Country4', region: 'Region2' },
    ];

    const result = groupCountriesByRegion(countries);

    expect(result).toEqual({
      Region1: [
        { id: 1, name: 'Country1', region: 'Region1' },
        { id: 2, name: 'Country2', region: 'Region1' },
      ],
      Region2: [
        { id: 3, name: 'Country3', region: 'Region2' },
        { id: 4, name: 'Country4', region: 'Region2' },
      ],
    });
  });

  it('handles empty input', () => {
    const result = groupCountriesByRegion([]);

    expect(result).toEqual({});
  });
});
