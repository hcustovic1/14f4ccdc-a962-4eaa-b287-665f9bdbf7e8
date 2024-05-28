'use client';

import { useFetchCountries } from '@/hooks/useFetchCountries';

export default function Home() {
  const { countries, error, loading } = useFetchCountries();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {loading && <div>Loading...</div>}
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
