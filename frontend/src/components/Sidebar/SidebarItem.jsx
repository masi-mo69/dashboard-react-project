import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({ to, icon, label }) => {
  const location = useLocation();
  // برای اینکه اگر مسیر فعلی زیرمسیر هم بود، فعال بمونه
  const isActive = location.pathname === to || location.pathname.startsWith(to + "/");

  return (
    <li
      className={`
        mb-2 p-[10px] rounded-[5px] transition-colors
        ${isActive ? "bg-[#f1ecff] border border-[#f1ecff] text-[#5025d1]" : "text-gray-600 hover:bg-[#d8dae0]"}
      `}
    >
      <Link to={to} className="flex items-center gap-2">
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
