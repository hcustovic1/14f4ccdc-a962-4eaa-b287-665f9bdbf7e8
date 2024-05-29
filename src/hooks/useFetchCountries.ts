import { useState, useEffect } from 'react';
import { fetchCountries } from '@/api/fetchCountries';
import { Country } from '@/types';

interface UseFetchCountriesResult {
  countries: Country[];
  error: Error | null;
  loading: boolean;
}

export const useFetchCountries = (): UseFetchCountriesResult => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (countries?.length || loading || error) return;

      setLoading(true);

      try {
        const data = await fetchCountries(window.fetch);
        setCountries(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [countries, loading]);

  return { countries, error, loading };
};
