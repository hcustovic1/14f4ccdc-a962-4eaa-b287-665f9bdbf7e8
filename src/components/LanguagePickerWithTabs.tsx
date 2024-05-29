import React, { useEffect, useState } from 'react';
import { Country, GroupedCountries } from '@/types';
import Image from 'next/image';
import { getCountryFlagUrl } from '@/utils/getCountryFlagUrl';
import { useLocalizationStore } from '@/store/useLocalizationStore';
import { Tabs } from './Tabs';

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
  const { language, setLanguage, setShouldShowLanguagePicker } =
    useLocalizationStore();

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
    setShouldShowLanguagePicker(false);
  };

  useEffect(() => {
    if (language && groupedCountries) {
      const selectedCountry = Object.values(groupedCountries)
        .flat()
        .find((country) => country['alpha-2'] === language);

      setActiveRegion(selectedCountry?.region || null);
    }
  }, [language, groupedCountries]);

  return (
    <div className="flex flex-col space-y-4 justify-center align-middle w-full bg-gray-800 rounded-2xl overflow-hidden border border-gray-500 border-t-2">
      <Tabs
        tabs={Object.keys(groupedCountries)}
        onSelectTab={handleTabSelect}
        initialActiveTab={activeRegion || undefined}
      />
      <div className="p-4 transition-all duration-500 bg-gray-700">
        {filteredCountries?.length === 0 && (
          <div>No countries found for this region.</div>
        )}
        {filteredCountries?.length && (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4" role="list">
            {filteredCountries.map((country) => (
              <li
                key={country.id}
                className="cursor-pointer overflow-hidden"
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
                    width="0"
                    height="0"
                    className="w-5 h-auto"
                  />
                  <span className="truncate">{country.name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
