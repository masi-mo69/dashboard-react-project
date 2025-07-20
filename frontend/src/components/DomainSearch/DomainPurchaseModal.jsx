import React from "react";
import { FaTimes } from "react-icons/fa";

const DomainPurchaseModal = ({ domain, isOpen, onClose, onPurchase }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-auto z-50">
     <div className="min-h-full flex justify-center">
      <div className="bg-white rounded-lg shadow-xl max-w-[40rem] w-full mt-6">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Choose billing period - {domain}</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
          </div>

          {/* محتوای مودال */}
          <div className="space-y-4 mb-6">
            {/* گزینه‌های مدت زمان */}
            {[
              { years: 3, price: "2.98", label: "BEST VALUE" },
              { years: 2, price: "4.98", label: "MOST POPULAR", popular: true },
              { years: 1, price: "8.98" }
            ].map((option) => (
              <div 
                key={option.years}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  option.popular 
                    ? "border-purple-500 bg-purple-50" 
                    : "border-gray-200 hover:border-purple-500"
                }`}
                onClick={() => onPurchase(option)}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{option.years} years</span>
                  {option.label && (
                    <span className={`text-xs px-2 py-1 rounded ${
                      option.popular 
                        ? "bg-purple-100 text-purple-800" 
                        : "bg-green-100 text-green-800"
                    }`}>
                      {option.label}
                    </span>
                  )}
                </div>
                <div className="mt-2">
                  <span className="text-gray-500 line-through">£14.99</span>
                  <span className="ml-2 text-lg font-bold">£{option.price}</span>
                  <span className="text-gray-500 text-sm">
                    /{option.years === 1 ? "yr" : "1st yr"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* بقیه بخش‌های مودال */}
          <div className="text-sm text-green-600 mb-4">
            FREE domain privacy protection included
          </div>

          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Taxes & Fees</span>
              <span>£4.36</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>£24.34</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <input 
                type="text" 
                placeholder="Coupon code" 
                className="border border-gray-300 rounded px-3 py-2 flex-grow mr-2" 
              />
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
                Add
              </button>
            </div>
          </div>

          <div className="text-xs text-gray-500 mb-6">
            By checking out, you agree with our Terms of Service...
          </div>

          <div className="text-sm text-gray-500 mb-6">
            Domain renews at £14.98/year on 2027-07-21
          </div>

          <button 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg"
            onClick={() => onPurchase()}
          >
            Continue to Payment
          </button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default DomainPurchaseModal;