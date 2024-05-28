import { Country, Fetch } from '@/types';

export const fetchCountries = async (fetch: Fetch): Promise<Country[]> => {
  const response = await fetch(process.env.NEXT_PUBLIC_COUNTRIES_API);

  if (!response.ok) {
    throw new Error('Failed to fetch countries data!');
  }

  return response.json();
};
