import React from "react";
import useDomainPricing from "../../hooks/useDomainPricing";

export default function DomainPricing() {
  const { prices, loading, error } = useDomainPricing();

  if (loading) return <p className="text-center">در حال بارگذاری...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!prices) return <p className="text-center">قیمتی یافت نشد</p>;

 
  const domainPrices = Object.entries(prices).map(([tld, data]) => ({
    extension: `.${tld}`,
    price: data.grace_period?.price || "نامشخص",
  }));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
      {domainPrices.map((item, index) => (
        <div
          key={index}
          className="text-center p-3 hover:bg-gray-50 rounded cursor-pointer border border-gray-200"
        >
          <div className="font-medium text-gray-700">{item.extension}</div>
          <div className="text-sm text-gray-500">{item.price}</div>
        </div>
      ))}
    </div>
  );
}
