import React from 'react';

const TabNavigation = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex flex-col md:flex-row border-b relative">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`w-full py-3 text-center text-lg font-medium transition-colors ${
            activeTab === tab ? 'text-purple-600' : 'text-gray-500 hover:text-purple-500'
          } relative`}
          onClick={() => onChange(tab)}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-purple-600 block md:hidden transition-all" />
          )}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
