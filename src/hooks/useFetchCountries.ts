import { fetchCountries } from '@/api/fetchCountries';
import { Country } from '@/types';
import { useState, useEffect } from 'react';

export const useFetchCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const data = await fetchCountries(window.fetch);
        setCountries(data);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchCountriesData();
  }, []);

  return { countries, error };
};
