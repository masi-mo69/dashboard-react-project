import React, { useState } from "react";
import kvmImage from "../assets/images/get-kvm.webp";
import GameImage from "../assets/images/get-game-panel.webp";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const VPS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is VPS Hosting?",
      answer: "Hostinger Horizons is a no-code AI builder that helps you create websites and web apps – no coding or design skills needed. Simply type your idea in your native language – or use an image to prompt – and AI will build your project. You can preview, test, and improve by chatting with AI. When your project's ready, publish it with one click. You can also connect your own domain, get professional email, and more to help grow your business."
    },
    {
      question: "What can I build with Hostinger Horizons?",
      answer: "With Hostinger Horizons, you can build various types of websites and web applications including business websites, portfolios, e-commerce stores, blogs, and more. The platform is versatile enough to accommodate most web-based projects."
    },
    {
      question: "How much does it cost to use Hostinger Horizons?",
      answer: "Hostinger Horizons offers different pricing plans to suit various needs. The basic plan starts at $9.99/month, while more advanced features are available in higher-tier plans. You can check our pricing page for detailed information."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-4">
      <div className="px-4 py-8">
        {/* عنوان اصلی */}
        <h1 className="text-2xl md:text-3xl font-bold text-left text-gray-800 mb-4">
          Build applications, host websites, or play games with VPS
        </h1>
        
        {/* زیرعنوان */}
        <p className="text-lg text-gray-600 text-left mb-8">
          Choose KVM for building applications with dedicated resources or Game Panel for hosting your favorite games
        </p>

        {/* کارت‌های سرویس */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* کارت KVM VPS */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              <img 
                src={kvmImage}
                alt="KVM VPS Server" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">KVM VPS</h2>
            <p className="text-gray-700 mb-6">
              Build your application or website with dedicated resources and complete control of your server
            </p>
            <a 
              href="#" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
            >
              Get now
            </a>
          </div>
         
          {/* کارت Game Panel */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              <img 
                src={GameImage}
                alt="Game Panel" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Game Panel</h2>
            <p className="text-gray-700 mb-6">
              Host your favorite games with top-tier processors and full customization for an unbeatable gaming experience
            </p>
            <a 
              href="#" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
            >
              Get now
            </a>
          </div>
        </div>

        {/* بخش پرسش و پاسخ */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">VPS Hosting FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                  {activeIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-600" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPS;