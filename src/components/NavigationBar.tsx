import React from 'react';
import Image from 'next/image';
import { useLocalizationStore } from '@/store/useLocalizationStore';
import { getCountryFlagUrl } from '@/utils/getCountryFlagUrl';

export const NavigationBar: React.FC = () => {
  const { language, shouldShowLanguagePicker, setShouldShowLanguagePicker } =
    useLocalizationStore();

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
      <h1 className="text-lg font-bold mr-4">Welcome User!</h1>

      <div className="relative">
        <button
          className="flex items-center"
          onClick={() => setShouldShowLanguagePicker(!shouldShowLanguagePicker)}
        >
          <Image
            className="mr-2"
            src={getCountryFlagUrl(language)}
            alt={language as string}
            width={25}
            height={25}
          />
          {language}
        </button>
      </div>
    </nav>
  );
};
