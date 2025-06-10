import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen relative">
      
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {isSidebarOpen && (
        <div 
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[55]"
        onClick={toggleSidebar} 
        />
      )}
      <div className="flex-1 relative z-[50]">
        <Header toggleSidebar={toggleSidebar} />
        <div className="pt-16 p-4 h-full overflow-auto bg-[#f4f5ff]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
