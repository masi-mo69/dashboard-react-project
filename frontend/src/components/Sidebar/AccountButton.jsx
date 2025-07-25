import React from "react";
import { useLocation, useNavigate } from "react-router-dom";  
import { FaUserCircle } from "react-icons/fa";

const AccountButton = () => {
  const location = useLocation();  
  const navigate = useNavigate();  

  const isActiveAccount = location.pathname === "/account"; 

  
  const handleClick = () => {
    navigate("/account");
  };

  return (
    <button
      onClick={handleClick}  
      className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition ${
        isActiveAccount ? "bg-[#f1ecff] border border-[#f1ecff] text-[#5025d1]" : "text-gray-600 hover:bg-[#d8dae0]"
      }`}
    >
      <FaUserCircle /> Account
    </button>
  );
};

export default AccountButton;
