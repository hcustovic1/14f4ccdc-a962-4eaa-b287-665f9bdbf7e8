import { Country } from '@/types';
import { fetchCountries } from '@/api/fetchCountries';
import { useLocalizationStore } from '@/store/useLocalizationStore';
import { useEffect, useState } from 'react';

export default function LanguagePicker() {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [selectedLanguage, setSelectedLanguage] = useState(
    useLocalizationStore((state) => state.language)
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesData = await fetchCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Language Picker</h1>
      <select
        value={selectedLanguage}
        onChange={(event) => {
          setSelectedLanguage(event.target.value);
          useLanguageStore.getState().setLanguage(event.target.value);
        }}
      >
        {countries.map((country) => (
          <option key={country.alpha_2} value={country.alpha_2}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
