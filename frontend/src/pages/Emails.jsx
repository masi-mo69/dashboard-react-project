import React, { useState } from 'react';

export default function Emails() {
  const [billingPeriod, setBillingPeriod] = useState('12 months');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const emailPlans = [
    {
      name: "Business Starter",
      description: "For small businesses who need better security and more storage.",
      price: "£0.39/mo",
      renewalPrice: "£1.59/mo when you renew",
      storage: "30 GB Storage per Mailbox",
      popular: false
    },
    {
      name: "Business Premium",
      description: "For scaling teams who need plenty of storage.",
      price: "£3.99/mo",
      renewalPrice: "£3.89/mo when you renew",
      storage: "30 GB Storage per Mailbox",
      popular: true
    },
    {
      name: "Google Workspace",
      description: "For entrepreneurs wanting to boost productivity and transform teamwork.",
      price: "£4.99/mo",
      renewalPrice: "£4.99/mo when you renew",
      storage: "30 GB Storage per Mailbox",
      popular: false
    }
  ];

  const billingOptions = [
    '12 months',
    '24 months', 
    '48 months'
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* عنوان مرکز‌چین شده */}
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Select Your Email Plan</h1>
        
        {/* Dropdown لیست دوره‌های پرداخت */}
        <div className="flex justify-center mb-8">
          <div className="relative w-[23rem]">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {billingPeriod}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {billingOptions.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setBillingPeriod(option);
                      setIsDropdownOpen(false);
                    }}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      billingPeriod === option ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Email Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emailPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-sm overflow-hidden border ${plan.popular ? 'border-blue-500' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-xs font-bold py-1 px-3 text-center">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h2>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-sm text-gray-500 ml-1">Price per mailbox</span>
                </div>
                
                <div className="text-sm text-gray-500 mb-6">
                  <p>{plan.renewalPrice}</p>
                  <p className="text-xs italic">*Price applies when purchasing for {billingPeriod}</p>
                </div>
                
                <div className="text-sm text-gray-600 mb-6">
                  <p>{plan.storage}</p>
                </div>
                
                <button className={`w-full py-2 rounded-md font-medium ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}