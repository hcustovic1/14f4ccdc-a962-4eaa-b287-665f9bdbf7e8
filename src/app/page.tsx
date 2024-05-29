'use client';

import { LanguagePickerWithTabs } from '@/components/LanguagePickerWithTabs';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useFetchCountries } from '@/hooks/useFetchCountries';
import { useLocalizationStore } from '@/store/useLocalizationStore';
import { GroupedCountries } from '@/types';
import { groupCountriesByRegion } from '@/utils/groupCountriesByRegion';
import { useEffect, useState } from 'react';

export default function Home() {
  const { countries, error, loading } = useFetchCountries();
  const [groupedCountries, setGroupedCountries] = useState<GroupedCountries>(
    {}
  );
  const { shouldShowLanguagePicker } = useLocalizationStore();

  useEffect(() => {
    if (countries) {
      setGroupedCountries(groupCountriesByRegion(countries));
    }
  }, [countries]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {!error && loading && (
        <div
          className="flex justify-center align-middle"
          role="status"
          aria-live="polite"
          aria-busy="true"
        >
          <LoadingSpinner size={25} />
          <span className="sr-only">Loading countries...</span>
        </div>
      )}

      {!loading && !error && shouldShowLanguagePicker && (
        <LanguagePickerWithTabs groupedCountries={groupedCountries} />
      )}

      {error && <div>Error: {error.message}</div>}
    </main>
  );
}
