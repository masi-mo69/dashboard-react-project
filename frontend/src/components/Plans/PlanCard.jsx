import React from 'react';

const PlanCard = ({ title, price, original, discount, websites, visits, storage, popular }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md relative ${popular ? 'border-2 border-purple-600' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 text-xs rounded-bl-lg">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 line-through text-sm">{original}</p>
      <p className="text-2xl font-bold">{price}</p>
      <p className="text-green-500 text-sm mb-4">{discount}</p>
      <ul className="text-sm space-y-1">
        <li>🌐 {websites}</li>
        <li>👥 {visits}</li>
        <li>💾 {storage}</li>
      </ul>
      <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md">Choose Plan</button>
    </div>
  );
};

export default PlanCard;
