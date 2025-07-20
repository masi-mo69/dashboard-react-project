import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import FancyLoader from "../components/Loader/FancyLoader"; // لودر دلخواه

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isFirstLoad, setFirstLoad] = useState(() => !sessionStorage.getItem("hasLoadedOnce"));

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setFirstLoad(false);
        sessionStorage.setItem("hasLoadedOnce", "true");
      }, 2500); // مدت زمان نمایش لودر

      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  if (isFirstLoad) return <FancyLoader />;

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
