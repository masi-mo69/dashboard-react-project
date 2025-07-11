import React from 'react';
import { CheckCircle, Lock, Key, Layers, RefreshCw, DollarSign, Headphones } from "lucide-react";

export default function TransferDomain() {
  // Features data
  const features = [
    {
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      title: "Simplified domain management",
      description: "Experience seamless control with all your services in one place. Say goodbye to juggling multiple providers."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-green-600" />,
      title: "Hassle-Free transfer",
      description: "Experience a smooth, user-friendly, and efficient domain transfer process like never before."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-600" />,
      title: "Unbeatable value",
      description: "Unlock exceptional savings when you transfer your domain to us."
    },
    {
      icon: <Headphones className="w-6 h-6 text-purple-600" />,
      title: "24/7 support",
      description: "If you face any problems or issues with your transfer or domain, our team is here to help."
    }
  ];

  // Requirements data
  const requirements = [
    {
      icon: <CheckCircle className="text-green-500 w-6 h-6" />,
      title: "Domain meets transfer requirements",
      description: "Over 60 days have passed since the initial domain registration or last transfer"
    },
    {
      icon: <Lock className="text-yellow-500 w-6 h-6" />,
      title: "Domain is unlocked",
      description: "Your domain must be unlocked from your current registrar before transferring. Learn more on how to unlock a domain."
    },
    {
      icon: <Key className="text-blue-500 w-6 h-6" />,
      title: "You have an authorization code",
      description: "You must have a valid domain authorization code. You can obtain it from the current registrar."
    }
  ];

  // Domain prices data
  const domainPrices = [
    { extension: ".com", price: "£8.99" },
    { extension: ".net", price: "£12.99" },
    { extension: ".io", price: "£40.99" },
    { extension: ".org", price: "£10.99" },
    { extension: ".online", price: "£23.99" }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-500">
        <span className="hover:text-gray-700 cursor-pointer">Home</span> / 
        <span className="hover:text-gray-700 cursor-pointer"> Domain portfolio</span> / 
        <span className="font-semibold text-gray-700"> Transfer Domain</span>
      </nav>

      {/* Main Title */}
      <h1 className="text-2xl font-bold text-gray-800">Transfer Domain</h1>

      {/* Requirements Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {requirements.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 flex items-start">
            <div className="mr-3 mt-0.5">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Domain Transfer Form */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Enter a domain for transfer</h2>
        
        {/* Domain Extensions */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
          {domainPrices.map((item, index) => (
            <div key={index} className="text-center p-3 hover:bg-gray-50 rounded cursor-pointer border border-gray-200">
              <div className="font-medium text-gray-700">{item.extension}</div>
              <div className="text-sm text-gray-500">{item.price}</div>
            </div>
          ))}
        </div>
        
        {/* Transfer Input */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="example.com"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Transfer
          </button>
        </div>
      </div>

      {/* Why Transfer Section */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Why transfer to Hostinger?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="p-2 bg-gray-100 rounded-full mr-4">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}