import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import WebHostingPlans from './WebHostingPlans';
import CloudHostingPlans from './CloudHostingPlans';
import AgencyHostingPlans from './AgencyHostingPlans';

const HostingTabs = () => {
  const tabs = ['Web Hosting', 'Cloud Hosting', 'Agency Hosting'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Web Hosting':
        return <WebHostingPlans />;
      case 'Cloud Hosting':
        return <CloudHostingPlans />;
      case 'Agency Hosting':
        return <AgencyHostingPlans />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <TabNavigation tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
};

export default HostingTabs;
