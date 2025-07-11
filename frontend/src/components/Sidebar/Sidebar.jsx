import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import AccountButton from "./AccountButton";
import {
  FaHome,
  FaGlobe,
  FaEnvelope,
  FaServer,
  FaUser,
  FaTimes,
  FaCreditCard,
  FaHistory,
  FaShoppingCart,
  FaStore,
  FaSearch,
  FaBoxOpen,
  FaTags
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openMenus, setOpenMenus] = useState({
    domains: false,
    billing: false,
    marketplace: false
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <div
      className={`sidebar fixed top-0 right-0 lg:static lg:pt-[5rem] 
        w-64 h-screen bg-white text-black p-5 z-[60] lg:z-0
        transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "translate-x-full"} 
        lg:translate-x-0 flex flex-col`}
    >
      {/* Close button for mobile */}
      <button
        className="absolute top-4 left-4 text-black lg:hidden"
        onClick={() => toggleSidebar(false)}
      >
        <FaTimes size={24} />
      </button>

      <div className="flex-1 overflow-y-auto">
        <h2 className="text-xl font-bold mb-5 lg:hidden">HOSTINGER</h2>
        <ul className="space-y-1">
          <SidebarItem to="/" icon={<FaHome />} label="Home" />
          <SidebarItem to="/websites" icon={<FaUser />} label="Websites" />

          {/* Domains Menu */}
          <li>
            <button
              onClick={() => toggleMenu("domains")}
              className="flex items-center justify-between w-full hover:bg-purple-100 p-2 rounded"
            >
              <span className="flex items-center gap-2">
                <FaGlobe /> Domains
              </span>
              <span>{openMenus.domains ? "▲" : "▼"}</span>
            </button>

            {openMenus.domains && (
              <ul className="pl-6 mt-1 space-y-1">
                <SidebarItem to="/domains/portfolio" label="Domain portfolio" />
                <SidebarItem to="/domains/new" label="Get a New Domain" />
                <SidebarItem to="/domains/transfers" label="Transfers" />
              </ul>
            )}
          </li>

          <SidebarItem to="/horizons" icon={<FaEnvelope />} label="Horizons" />
          <SidebarItem to="/emails" icon={<FaEnvelope />} label="Emails" />
          <SidebarItem to="/vps" icon={<FaServer />} label="VPS" />

          {/* Billing Menu */}
          <li>
            <button
              onClick={() => toggleMenu("billing")}
              className="flex items-center justify-between w-full hover:bg-purple-100 p-2 rounded"
            >
              <span className="flex items-center gap-2">
                <FaCreditCard /> Billing
              </span>
              <span>{openMenus.billing ? "▲" : "▼"}</span>
            </button>

            {openMenus.billing && (
              <ul className="pl-6 mt-1 space-y-1">
                <SidebarItem to="/billing/subscriptions" label="Subscriptions" />
                <SidebarItem to="/billing/history" label="Payment History" />
                <SidebarItem to="/billing/methods" label="Payment Methods" />
              </ul>
            )}
          </li>

          {/* New Marketplace Menu */}
          <li>
            <button
              onClick={() => toggleMenu("marketplace")}
              className="flex items-center justify-between w-full hover:bg-purple-100 p-2 rounded"
            >
              <span className="flex items-center gap-2">
                <FaStore /> Marketplace
              </span>
              <span>{openMenus.marketplace ? "▲" : "▼"}</span>
            </button>

            {openMenus.marketplace && (
                <ul className="pl-6 mt-1 space-y-1">
                <SidebarItem to="/marketplace/domains" label="Domains" />
                <SidebarItem to="/marketplace/emails" label="Emails" />
                <SidebarItem to="/marketplace/hosting" label="Hosting" />
                <SidebarItem to="/marketplace/products" label="Products" />
                <SidebarItem to="/marketplace/services" label="Services" />
                <SidebarItem to="/marketplace/tools" label="Tools" />
                <SidebarItem to="/marketplace/other" label="Other" />
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <AccountButton />
      </div>
    </div>
  );
};

export default Sidebar;