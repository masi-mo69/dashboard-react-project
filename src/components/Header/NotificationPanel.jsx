import React from "react";

const NotificationPanel = ({ isOpen, onClose }) => {
  return (
    <>
      {/* بک‌درایپ برای بستن */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* خود پنل */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 
        transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold text-lg">Notifications</h2>
          <button onClick={onClose} className="text-gray-500 text-xl">×</button>
        </div>

        <div className="p-4 space-y-3">
          <p className="text-sm text-gray-700">🔔 پیام جدید دارید</p>
          <p className="text-sm text-gray-700">📦 سفارش شما ارسال شد</p>
          <p className="text-sm text-gray-700">💡 بروزرسانی جدید موجود است</p>
        </div>
      </div>
    </>
  );
};

export default NotificationPanel;
