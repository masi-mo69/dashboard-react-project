import React, { useState } from 'react';
import { hostingPlans } from '../../data/hostingPlans';
import PlanCard from '../Plans/PlanCard';
import PlanSlider from '../Plans/PlanSlider';

const CloudHostingPlans = () => {
  const plans = hostingPlans['Cloud Hosting'];
  const [step, setStep] = useState(0);

  const labels = ['Startup', 'Professional', 'Enterprise'];
  const currentPlan = plans[step]; 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* بخش چپ: تب و منابع */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        {/* سوییچر بالای پلن */}
        <div className="flex justify-between items-center mx-auto mb-6">
          {labels.map((label, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`text-sm font-medium px-3 py-1 rounded-full transition ${
                step === i ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-purple-500'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <PlanSlider step={step} setStep={setStep} total={labels.length} />

        {/* پلن انتخاب‌شده */}
        <PlanCard {...currentPlan} />
      </div>

      {/* بخش راست: قیمت و امکانات */}
      <div className="border rounded-xl p-6 bg-white shadow-md">
        <p className="text-sm line-through text-gray-400">{currentPlan.oldPrice}</p>
        <h3 className="text-3xl font-bold text-purple-700">
          {currentPlan.price} <span className="text-base font-normal text-gray-600">/mo</span>
        </h3>
        <p className="text-sm text-purple-500 font-medium mb-2">{currentPlan.promo}</p>
        <p className="text-xs text-gray-500 mb-4">{currentPlan.renewNote}</p>

        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
          Choose Plan
        </button>
        <p className="text-xs text-gray-500 mt-2">30-day money-back guarantee</p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          {currentPlan.features.map((feature, i) => (
            <li key={i}>✅ {feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CloudHostingPlans;
