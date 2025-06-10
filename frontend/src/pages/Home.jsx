// src/pages/HomePage/HomePage.js
import React, {useState , useEffect} from "react";
import axios from "axios";

import DomainSearch from "../components/DomainSearch/DomainSearch";
import HomeHosting from "../assets/images/HomeHostingCrossSell.png";
import DomainLinks from "../components/DomainSearch/DomainLink";

const HomePage = () => {
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    axios
      .get("https://6846aa507dbda7ee7aafddfa.mockapi.io/api/plans/plans")
      .then((res) => {
        const firstPlan = res.data[0]; // فقط اولین پلن
        setPlan(firstPlan);
      })
      .catch((err) => console.error("خطا در گرفتن پلن:", err));
  }, []);

  
  return (
    <div className="p-6 bg-[#f4f5ff] min-h-screen">
      {/* Welcome Text */}
      <h1 className="text-2xl font-bold text-[#1d1e20] mb-6">
        Hello, masi!
      </h1>

      {/* Section 1: Website Builder Promo */}
      {plan && (
        <div
          className="bg-white p-8 rounded-lg shadow-md mb-8 flex flex-col justify-between md:flex-row items-center"
        >
          <img
            src={HomeHosting}
            alt={plan.title}
            className="h-full bg-cover object-contain mb-6 md:mb-0"
          />
          <div className="ml-6 self-stretch text-center flex flex-col justify-between">
            <h2 className="text-xl font-bold text-[#1d1e20] mb-2">{plan.title}</h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="line-through text-gray-400">
                £{plan.originalPrice}
              </span>
              <span className="bg-pink-200 text-pink-700 px-2 py-1 rounded text-xs font-bold">
                SAVE {plan.discountPercent}%
              </span>
            </div>
            <div className="text-3xl font-bold text-[#1d1e20] mb-4">
              £{plan.price}/mo
            </div>
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg transition">
              Explore plans
            </button>
          </div>
        </div>
      )}
        


      {/* Section 2: Start with a domain */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8  justify-between md:flex-row items-center">
       <h2 className="text-xl font-bold text-[#1d1e20] mb-2">
            Website Builder & Web Hosting
          </h2>
          <p className="text-gray-600 mb-4">
            Get your Web Hosting plan and build your website quickly
          </p>
        <DomainSearch /> 
        <DomainLinks />
      </div>
    </div>
  );
};

export default HomePage;
