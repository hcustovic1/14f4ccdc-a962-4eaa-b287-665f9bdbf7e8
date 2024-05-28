import { fetchCountries } from '@/api/fetchCountries';
import { useLocalizationStore } from '@/store/useLocalizationStore';
import { useState, useEffect } from 'react';

export const useFetchCountries = () => {
  const { countries, setCountries } = useLocalizationStore();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCountriesData = async () => {
      if (!!countries.length || loading) return;

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

    fetchCountriesData();
  }, [countries, setCountries, loading]);

  return { countries, error, loading };
};
