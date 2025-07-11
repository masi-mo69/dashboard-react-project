import React from "react";
import { FaSearch, FaStar, FaGoogle, FaWordpress, FaShieldAlt, FaEnvelope, FaExchangeAlt } from "react-icons/fa";

const ProductsMarket = () => {
  const recommendedProducts = [
    {
      title: "No-Code Website Builder",
      icon: <FaStar className="text-yellow-400" />
    },
    {
      title: "Malware Scanner",
      icon: <FaShieldAlt className="text-blue-500" />
    },
    {
      title: "Email Account",
      icon: <FaEnvelope className="text-red-500" />
    },
    {
      title: "Free Automatic Website Migration",
      icon: <FaExchangeAlt className="text-green-500" />
    },
    {
      title: "Unlimited Free SSL",
      icon: <FaShieldAlt className="text-purple-500" />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* بخش Recommended for you */}
      <div className="mb-10">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Recommended for you</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {recommendedProducts.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">{product.icon}</div>
              <h4 className="font-medium text-gray-800">{product.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* بخش Web Hosting */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-700">Web Hosting</h3>
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">SAVE 86%</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <FaGoogle className="text-blue-500 text-xl" />
            <span className="font-medium">Google</span>
          </div>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-2xl font-bold">$1.49</span>
            <span className="text-gray-500">/mo</span>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
            Get Now
          </button>
        </div>
      </div>

      {/* بخش Explorer plans */}
      <div className="mb-10">
        <h3 className="text-lg font-medium text-gray-700 mb-1">Explorer plans</h3>
        <p className="text-gray-500 text-sm mb-4">Plan reviews at £730/month</p>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <FaWordpress className="text-blue-500" />
              <span>Unmetered traffic</span>
            </li>
            <li className="flex items-center gap-2">
              <FaWordpress className="text-blue-500" />
              <span>Weekly Backups</span>
            </li>
            <li className="flex items-center gap-2">
              <FaWordpress className="text-blue-500" />
              <span>50 GB SSD Storage</span>
            </li>
            <li className="flex items-center gap-2">
              <FaWordpress className="text-blue-500" />
              <span>Managed WordPress</span>
            </li>
            <li className="flex items-center gap-2">
              <FaWordpress className="text-blue-500" />
              <span>24/7 Customer Support</span>
            </li>
          </ul>
        </div>
      </div>

      {/* بخش All products */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-4">All products</h3>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex items-center gap-2 text-sm mb-2">
          <span className="font-medium">Web Hosting</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Save 80%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsMarket;