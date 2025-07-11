import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import HomeHosting from "../assets/images/banner.png";

export default function Horizons() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Hostinger Horizons, and how does it work?",
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
    <section className="py-12 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* بنر بالای صفحه */}
        <div className="relative mb-8 rounded-lg overflow-hidden">
        <img 
          src={HomeHosting} 
          alt="Hostinger Horizons Banner"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Hostinger Horizons</h1>
            <p className="text-gray-200">Create amazing websites without coding</p>
          </div>
        </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div
                className={`px-6 pb-6 pt-0 transition-all duration-300 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}