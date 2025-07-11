import React, { useState } from "react";
import { FaFileInvoiceDollar, FaMoneyBillWave, FaSmile, FaExchangeAlt } from "react-icons/fa";

const PaymentHistory = () => {
  const [activeTab, setActiveTab] = useState("payment");

  // عنوان‌های پویا بر اساس تب فعال
  const getTitle = () => {
    switch(activeTab) {
      case "payment":
        return "Payment History";
      case "refund":
        return "Refund History";
      default:
        return "Payment History";
    }
  };

  // آیکون‌های پویا بر اساس تب فعال
  const getIcon = () => {
    switch(activeTab) {
      case "payment":
        return <FaFileInvoiceDollar className="text-blue-600" />;
      case "refund":
        return <FaExchangeAlt className="text-blue-600" />;
      default:
        return <FaFileInvoiceDollar className="text-blue-600" />;
    }
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* عنوان صفحه - پویا بر اساس تب فعال */}
      <div className="flex items-center gap-2 mb-6">
        {getIcon()}
        <h1 className="text-xl font-bold text-gray-800">{getTitle()}</h1>
      </div>

      {/* نوار وضعیت - پویا بر اساس تب فعال */}
      <div className="bg-blue-50 p-3 rounded-lg mb-6">
        <span className="font-medium text-blue-600">
          Billing - {getTitle()} - {activeTab === "payment" ? "Paid" : "Processed"}
        </span>
      </div>

      {/* تب‌ها */}
      <div className="flex border-b border-gray-200 mb-6">
        <button 
          onClick={() => setActiveTab("payment")}
          className={`px-4 py-2 font-medium ${
            activeTab === "payment" 
              ? "text-blue-600 border-b-2 border-blue-600" 
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          Payment history
        </button>
        <button 
          onClick={() => setActiveTab("refund")}
          className={`px-4 py-2 font-medium ${
            activeTab === "refund" 
              ? "text-blue-600 border-b-2 border-blue-600" 
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          Refund history
        </button>
      </div>

      {/* محتوای تب‌ها */}
      {activeTab === "payment" ? (
        <div className="text-center py-12">
          <FaMoneyBillWave className="mx-auto text-gray-300 text-5xl mb-4" />
          <h3 className="text-xl font-bold text-gray-700 mb-2">Nothing Found</h3>
          <p className="text-gray-500 text-lg">Currently, you don't have any payment list</p>
        </div>
      ) : (
        <div className="text-center py-12">
          <FaSmile className="mx-auto text-yellow-400 text-5xl mb-4" />
          <h3 className="text-xl font-medium text-gray-700 mb-2">You don’t have any refunds</h3>
          <p className="text-gray-500">Learn more about our Refund Policy</p>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;