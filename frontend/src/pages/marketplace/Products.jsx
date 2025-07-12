import React from "react";
import { FaSearch, FaCloud, FaGamepad, FaServer, FaGlobe } from "react-icons/fa";

const AllProducts = () => {
  const products = [
    {
      title: "Web Hosting",
      discount: "Save 80%",
      description: "Host and manage small and medium size websites on the same server using our web hosting solution",
      icon: <FaServer className="text-blue-500 text-xl" />
    },
    {
      title: "Cloud Hosting",
      discount: "Save 70%",
      description: "Safe and trustworthy, our cloud hosting is an ideal choice for large-scale websites or other projects",
      icon: <FaCloud className="text-blue-400 text-xl" />
    },
    {
      title: "VPS Hosting",
      discount: "Save 70%",
      description: "Take full control over your server. Our virtual private servers offer great power, flexibility, and speed.",
      icon: <FaServer className="text-purple-500 text-xl" />
    },
    {
      title: "Game Panel Hosting",
      discount: "Save 70%",
      description: "Game server solutions with scalable resources and global server locations for an unbeatable gaming experience.",
      icon: <FaGamepad className="text-green-500 text-xl" />
    },
    {
      title: "Register domain",
      discount: "",
      description: "Find the perfect domain name. Choose from more than 200 extensions.",
      icon: <FaGlobe className="text-orange-500 text-xl" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* بخش جستجو */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Type here to search"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-4 text-gray-400" />
        </div>
      </div>

      {/* لیست محصولات */}
      <div className="space-y-6 mb-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                {product.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                  {product.discount && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      {product.discount}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* بخش Refer & earn */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-center">
        <p className="font-medium text-yellow-800">Refer & earn up to 450 USD</p>
      </div>

      {/* پاورقی */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-4 md:mb-0">
          <span>Items per page: 5 → 1 - 5 of 22</span>
        </div>
        <div className="flex items-center gap-4">
          <span>25°C Sunny</span>
          <span>7:51 AM</span>
          <span>7/11/2025</span>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;