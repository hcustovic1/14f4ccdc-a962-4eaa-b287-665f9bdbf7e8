import React, { useState } from 'react';

interface TabsProps {
  tabs: string[];
  onSelectTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onSelectTab }) => {
  const [activeTab, setActiveTab] = useState<string | null>(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onSelectTab(tab);
  };

  return (
    <nav className="flex space-x-4" aria-label="Tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 font-medium focus:outline-none ${
            activeTab === tab
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => handleTabClick(tab)}
          aria-current={activeTab === tab ? 'page' : undefined}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Tabs;
