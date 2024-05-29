import React, { useEffect, useState } from 'react';
import Tabs from './Tabs';
import { Country, GroupedCountries } from '@/types';
import Image from 'next/image';
import { getCountryFlagUrl } from '@/utils/getCountryFlagUrl';
import { useLocalizationStore } from '@/store/useLocalizationStore';

interface LanguagePickerProps {
  groupedCountries: GroupedCountries;
}

export const LanguagePickerWithTabs: React.FC<LanguagePickerProps> = ({
  groupedCountries,
}) => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [filteredCountries, setFilteredCountries] = useState<Country[] | null>(
    null
  );
  const { setLanguage } = useLocalizationStore();

  useEffect(() => {
    setActiveRegion(Object.keys(groupedCountries)[0] || null);
  }, [groupedCountries]);

  useEffect(() => {
    if (activeRegion) {
      setFilteredCountries((groupedCountries[activeRegion] as Country[]) || []);
    }
  }, [activeRegion, groupedCountries]);

  const handleTabSelect = (region: string) => {
    setActiveRegion(region);
  };

  const handleCountryClick = (countryCode: string) => {
    setLanguage(countryCode);
  };

  return (
    <div className="flex flex-col space-y-4">
      <Tabs
        tabs={Object.keys(groupedCountries)}
        onSelectTab={handleTabSelect}
      />
      <div>
        {filteredCountries?.length === 0 && (
          <div>No countries found for this region.</div>
        )}
        {filteredCountries?.length && (
          <ul className="grid grid-cols-2 gap-4" role="list">
            {filteredCountries.map((country) => (
              <li
                key={country.id}
                className="cursor-pointer"
                onClick={() => handleCountryClick(country?.['alpha-2'])}
              >
                <button
                  className="flex items-center space-x-2 w-full text-left focus:outline-none focus:ring focus:ring-blue-300"
                  onClick={() => handleCountryClick(country?.['alpha-2'])}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleCountryClick(country?.['alpha-2']);
                    }
                  }}
                >
                  <Image
                    src={getCountryFlagUrl(country?.['alpha-2'])}
                    alt={`Flag of ${country.name}`}
                    width={25}
                    height={25}
                    className="w-6 h-4"
                  />
                  <span>{country.name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
