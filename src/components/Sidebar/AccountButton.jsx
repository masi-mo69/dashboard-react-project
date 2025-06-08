import React from "react";
import { useLocation, useNavigate } from "react-router-dom";  // استفاده از useLocation و useNavigate
import { FaUserCircle } from "react-icons/fa";

const AccountButton = () => {
  const location = useLocation();  // گرفتن موقعیت فعلی
  const navigate = useNavigate();  // گرفتن تابع ناوبری

  const isActiveAccount = location.pathname === "/account"; // بررسی صفحه "Account"

  // رویداد کلیک برای هدایت به صفحه Account
  const handleClick = () => {
    navigate("/account");
  };

  return (
    <button
      onClick={handleClick}  // اضافه کردن رویداد کلیک
      className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition ${
        isActiveAccount ? "bg-[#f1ecff] border border-[#f1ecff] text-[#5025d1]" : "text-gray-600 hover:bg-[#d8dae0]"
      }`}
    >
      <FaUserCircle /> Account
    </button>
  );
};

export default AccountButton;
