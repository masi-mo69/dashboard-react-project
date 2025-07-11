import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const AccountButton = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

 //close popup
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-700 text-2xl hover:text-purple-600"
      >
        <FaUserCircle />
      </button>

      {open && (
        <div className="absolute left-0 mt-[1.3rem] w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <ul className="text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountButton;
