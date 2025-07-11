import React from "react";
import { Outlet } from "react-router-dom";

const Domains = () => {
  return (
    <div className="p-4">
      {/* سایر محتواهای دامنه */}
      
      {/* اینجا زیرمسیرها نمایش داده میشن */}
      <Outlet />
    </div>
  );
};

export default Domains;
