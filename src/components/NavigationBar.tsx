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
            src={getCountryFlagUrl(language)}
            alt={language as string}
            width="0"
            height="0"
            className="w-5 h-auto mr-2"
          />
          {language}
        </button>
      </div>
    </nav>
  );
};
