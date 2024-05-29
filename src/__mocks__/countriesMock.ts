import { Country, GroupedCountries } from '@/types';

export const mockCountries: Array<Partial<Country>> = [
  { 'alpha-2': 'US', name: 'United States' },
  { 'alpha-2': 'CA', name: 'Canada' },
];

export const groupedCountriesMock: GroupedCountries = {
  Europe: [
    { id: 1, name: 'Germany', region: 'Europe', 'alpha-2': 'DE' },
    { id: 2, name: 'France', region: 'Europe', 'alpha-2': 'FR' },
  ],
  Asia: [
    { id: 3, name: 'Japan', region: 'Asia', 'alpha-2': 'JP' },
    { id: 4, name: 'China', region: 'Asia', 'alpha-2': 'CN' },
  ],
};
