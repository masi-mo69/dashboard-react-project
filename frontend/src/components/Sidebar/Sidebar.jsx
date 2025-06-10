import React from "react";
import SidebarItem from "./SidebarItem";
import AccountButton from "./AccountButton";

import {
  FaHome,
  FaGlobe,
  FaEnvelope,
  FaServer,
  FaUser,
  FaTimes,
  FaUserCircle
} from "react-icons/fa";


const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`sidebar fixed top-0 right-0 lg:static lg:pt-[5rem] 
        w-64 h-screen bg-white text-black p-5 z-[60] lg:z-0
        transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "translate-x-full"} 
        lg:translate-x-0 flex flex-col`}
    >
      <button
        className="absolute top-4 left-4 text-black lg:hidden"
        onClick={() => toggleSidebar(false)}
      >
        <FaTimes size={24} />
      </button>


      <div className="flex-1 overflow-y-auto">
        <h2 className="text-xl font-bold mb-5 lg:hidden">HOSTINGER</h2>
        <ul>
          <SidebarItem to="/" icon={<FaHome />} label="Home" />
          <SidebarItem to="/domains" icon={<FaGlobe />} label="Domains" />
          <SidebarItem to="/emails" icon={<FaEnvelope />} label="Emails" />
          <SidebarItem to="/vps" icon={<FaServer />} label="VPS" />
          <SidebarItem to="/websites" icon={<FaUser />} label="Websites" />
        </ul>
      </div>

     
      <div className="mt-6">
        <AccountButton />
      </div>
    </div>
  );
};

export default Sidebar;
