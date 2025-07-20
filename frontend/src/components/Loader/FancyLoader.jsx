// src/components/Loader/FancyLoader.jsx
import React from "react";
import LoaderImage from "../../assets/svg/loader.svg"; 

const FancyLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative w-32 h-32">
        <img
          src={LoaderImage}
          alt="loading"
          className="w-full h-full object-contain z-10 relative"
        />
        <div className="absolute inset-0 border-4 border-blue-400 border-t-transparent rounded-full animate-spin-slow z-0" />
      </div>
    </div>
  );
};

export default FancyLoader;
