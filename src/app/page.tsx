'use client';

import { useEffect, useState } from 'react';
import { fetchCountries } from '@/api/fetchCountries';
import { useLanguageStore } from '@/store/useLanguageStore';

export default function Home() {
  const { language, setLanguage } = useLanguageStore();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const data = await fetchCountries(window.fetch);
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountriesData();
  }, []);

  useEffect(() => {
    // window.alert(language)
  }, [language]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
