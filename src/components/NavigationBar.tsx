import React, { useState } from 'react';
import Image from 'next/image';
import { useLocalizationStore } from '@/store/useLocalizationStore';
import { getCountryFlagUrl } from '@/utils/getCountryFlagUrl';

const NavigationBar: React.FC = () => {
  const [isLanguagePickerOpen, setIsLanguagePickerOpen] =
    useState<boolean>(false);

  const { language } = useLocalizationStore();

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
      <h1 className="text-lg font-bold mr-4">Welcome User!</h1>

      <div className="relative">
        <button
          className="flex items-center"
          onClick={() => setIsLanguagePickerOpen(!isLanguagePickerOpen)}
        >
          <Image
            className="w-6 h-6 mr-2"
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

export default NavigationBar;
