import { Country } from '@/types';

export const groupCountriesByRegion = (
  countries: Pick<Country, 'id' | 'name' | 'region'>[]
) => {
  return countries.reduce<{
    [key: string]: Pick<Country, 'id' | 'name' | 'region'>[];
  }>((acc, country) => {
    acc[country.region] = [...(acc[country.region] || []), country];
    return acc;
  }, {});
};
