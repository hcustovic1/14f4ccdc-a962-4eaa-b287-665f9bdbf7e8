import { Country, GroupedCountries } from '@/types';

export const mockCountries: Array<Partial<Country>> = [
  { 'alpha-2': 'US', name: 'United States' },
  { 'alpha-2': 'CA', name: 'Canada' },
];

export const groupedCountriesMock: GroupedCountries = {
  Europe: [
    { id: 1, name: 'Germany', region: 'Europe' },
    { id: 2, name: 'France', region: 'Europe' },
  ],
  Asia: [
    { id: 3, name: 'Japan', region: 'Asia' },
    { id: 4, name: 'China', region: 'Asia' },
  ],
};
