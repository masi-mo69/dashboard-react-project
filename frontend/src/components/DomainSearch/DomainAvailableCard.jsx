import React, { useState } from "react";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import DomainPurchaseModal from "./DomainPurchaseModal";

const DomainAvailableCard = ({ domain }) => {
  const [showModal, setShowModal] = useState(false);

  const handlePurchase = (selectedOption) => {
    console.log("Purchasing:", domain, "Option:", selectedOption);
    // منطق پرداخت را اینجا پیاده‌سازی کنید
    setShowModal(false);
  };


  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Right: Bundle & Save */}
        <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-4 flex flex-col justify-between">
          <h4 className="font-bold text-black mb-4">Bundle & Save</h4>
          <div className="text-lg font-bold text-gray-800 mb-2">
            {domain} + .xyz + .online
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-red-500 font-bold">Save 77%</span>
          </div>
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="text-gray-500 line-through">£55.97</span>
              <span className="ml-2 text-xl font-bold text-gray-800">£12.97</span>
              <span className="text-gray-500 text-sm">/first yr</span>
            </div>
            <button 
                onClick={() => setShowModal(true)}
                className="bg-white hover:bg-gray-200 border text-purple-500 font-medium py-2 px-4 rounded-md flex items-center">
                Buy Now
            </button>
          </div>

         <DomainPurchaseModal
            domain={domain}
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onPurchase={handlePurchase}
         />

          {/* Bundle features */}
          <div>
            <div className="flex items-start mb-3">
              <FaCheck className="text-green-500 mt-1 mr-2" />
              <p className="text-gray-700">
                Save money and increase brand visibility with a domain bundle.
              </p>
            </div>
            <div className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-2" />
              <p className="text-gray-700">
                Manage all your domains securely in one account.
              </p>
            </div>
          </div>
        </div>
        {/* Left: Exact Match */}
        <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-4 flex flex-col justify-between">
          {/* Title */}
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-green-600 mb-2">Exact match</h3>
            <h2 className="text-2xl font-bold text-gray-800">{domain}</h2>
          </div>

          {/* Pricing */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-red-500 font-bold">Save 80%</span>
              <span className="text-xs text-gray-500">Only for 3yr+ term</span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-gray-500 line-through">£14.99</span>
                <span className="ml-2 text-2xl font-bold text-gray-800">£2.99</span>
                <span className="text-gray-500 text-sm">/first yr</span>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-4 rounded-md flex items-center">
                Buy Now
              </button>
            </div>

            <DomainPurchaseModal
                domain={domain}
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onPurchase={handlePurchase}
            />
          </div>

          {/* Features */}
          <div>
            <div className="flex items-start mb-3">
              <FaCheck className="text-green-500 mt-1 mr-2" />
              <p className="text-gray-700">
                .com domains are very popular and usually get registered quickly.
              </p>
            </div>
            <div className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-2" />
              <p className="text-gray-700">
                This domain is perfect for custom web projects.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DomainAvailableCard;
