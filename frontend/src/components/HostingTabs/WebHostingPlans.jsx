import React, { useState } from 'react';
import { hostingPlans } from '../../data/hostingPlans';
import PlanCard from '../Plans/PlanCard';
import DotSwitcher from '../common/DotSwitcher';

const WebHostingPlans = () => {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const plans = hostingPlans['Web Hosting'];

  return (
    <div className="bg-[#f7f5ff] p-6 rounded-xl shadow-md">
      {/* mobile */}
      <div className="block md:hidden">
        <DotSwitcher count={plans.length} activeIndex={activeMobileIndex} onChange={setActiveMobileIndex} />
        <PlanCard {...plans[activeMobileIndex]} />
      </div>

      {/* desktop */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <PlanCard key={i} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default WebHostingPlans;
