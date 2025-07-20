import React from 'react';

const TabNavigation = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex flex-col md:flex-row border-b relative">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`relative w-full py-3 text-center text-lg font-medium transition-colors ${
            activeTab === tab
              ? 'text-purple-600'
              : 'text-gray-500 hover:text-purple-500'
          }`}
          onClick={() => onChange(tab)}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transition-all" />
          )}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
