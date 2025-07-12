import React, { useState, useRef, useEffect } from "react";
import useClient from "../../hooks/useClient";
import {
  FaUserCircle, FaUser, FaShieldAlt, FaShareAlt,
  FaHistory, FaBell, FaLanguage, FaSignOutAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AccountButton = () => {
  const { user, loading, error } = useClient(1);
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // بستن پنل وقتی بیرون کلیک میشه
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { id: 'profile', icon: <FaUser className="text-purple-500" />, label: 'Profile', path: '/profile' },
    { id: 'security', icon: <FaShieldAlt className="text-blue-500" />, label: 'Security', path: '/security' },
    { id: 'sharing', icon: <FaShareAlt className="text-green-500" />, label: 'Account Sharing', path: '/sharing' },
    { id: 'activity', icon: <FaHistory className="text-yellow-500" />, label: 'Account Activity', path: '/activity' },
    { id: 'notifications', icon: <FaBell className="text-red-500" />, label: 'Notification settings', path: '/notifications' },
    { id: 'language', icon: <FaLanguage className="text-indigo-500" />, label: 'Language (English)', path: '/language' }
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-700 text-2xl hover:text-purple-600 transition-colors"
      >
        <FaUserCircle />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          
          {/* هدر اطلاعات کاربر */}
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            {loading && <p className="text-sm text-gray-500">Loading...</p>}
            {error && <p className="text-sm text-red-500">خطا در دریافت اطلاعات</p>}
            {user && (
              <>
                <h3 className="font-medium text-gray-900">{user.firstname} {user.lastname}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </>
            )}
          </div>

          <div className="divide-y divide-gray-200">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="block px-4 py-3 flex items-center hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => setOpen(false)}
              >
                <span className="text-lg mr-3">{item.icon}</span>
                <span className="text-sm text-gray-700">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="p-2 border-t border-gray-200">
            <button
              className="w-full py-2 px-4 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors flex items-center justify-center"
              onClick={() => {
                // اینجا می‌تونی لاگ اوت رو هندل کنی
                setOpen(false);
              }}
            >
              <FaSignOutAlt className="mr-2" />
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountButton;
