import { HiMenu } from "react-icons/hi";
import React , { useState } from "react";
import NotificationButton from "./NotificationButton";
import NotificationPanel from "./NotificationPanel";
import AccountButton from "./AccountButton";
import HelpButton from "./HelpButton";
import HelpChatPopup from "./HelpChatPopup";

const Header = ({ toggleSidebar }) => {
  const [isNotifOpen, setNotifOpen] = useState(false);
  const [isHelpOpen, setHelpOpen] = useState(false);

  return (
    <>
    <div className={`w-full bg-white shadow-md flex justify-between fixed top-0 left-0 h-16 
    ${isNotifOpen ? "z-0" : "z-40"} 
    items-center px-6 transition-all duration-300`}>

            {/* hambergermenu for mobile */}
            <button 
                className="text-2xl text-gray-700 lg:hidden " 
                onClick={toggleSidebar}
              >
                <HiMenu />
            </button>

            {/* Header for desktop */}
            <h1 className="text-xl font-bold hidden lg:block">Dashboard</h1>
            
            <div className="flex items-center gap-4">
              <button className="bg-[#ebe4ff] text-[#5025d1] px-4 py-2 rounded-lg hover:bg-[#f2f3f6]">
                Ask Kodee
              </button>
              
              <NotificationButton onClick={() => setNotifOpen(true)}/>
              <HelpButton onClick={() => setHelpOpen(true)}/>
              <AccountButton />
            </div>
          </div>

          {/* panels */}
          <NotificationPanel isOpen={isNotifOpen} onClose={() => setNotifOpen(false)} />
          <HelpChatPopup isOpen={isHelpOpen} onClose={() => setHelpOpen(false)} />
    </>
  );
};

export default Header;
