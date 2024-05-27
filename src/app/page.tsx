'use client';

import { useEffect, useState } from 'react';
import { fetchCountries } from '@/api/fetchCountries';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useFetchCountries } from '@/hooks/useFetchCountries';

export default function Home() {
  const { language, setLanguage } = useLanguageStore();

  const { countries, error } = useFetchCountries();

  useEffect(() => {}, []);

  useEffect(() => {
    // window.alert(language)
  }, [language]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {countries.map((country) => (
            <li key={country['alpha-2']}>{country.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
