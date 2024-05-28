import { Country, GroupedCountries } from '@/types';

export const groupCountriesByRegion = (
  countries: Pick<Country, 'id' | 'name' | 'region'>[]
): GroupedCountries => {
  return countries.reduce<{
    [key: string]: Pick<Country, 'id' | 'name' | 'region'>[];
  }>((acc, country) => {
    const region = country.region.trim() === '' ? 'World' : country.region;
    acc[region] = [...(acc[region] || []), country];

    return acc;
  }, {});
};
