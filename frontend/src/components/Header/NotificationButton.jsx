import React from "react";
import { FaBell } from "react-icons/fa";

const NotificationButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-gray-700 text-2xl hover:text-purple-600 relative"
    >
      <FaBell />
  
      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
    </button>
  );
};

export default NotificationButton;
