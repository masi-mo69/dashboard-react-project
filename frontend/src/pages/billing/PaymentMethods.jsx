import React from 'react';
import { Link } from 'react-router-dom';

export default function PaymentMethods() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Payment Methods</h1>
      <div className="flex flex-col items-center justify-center bg-gray-50 border rounded-lg p-10">
        <div className="text-gray-400 mb-4 text-5xl">🌐</div>
        <p className="font-semibold mb-2">Nothing found</p>
        <p className="text-gray-600 mb-4 text-center">
          Currently, you don’t have any payment methods.
        </p>
        <div className="flex gap-4">
          <Link
            to="/domains/new"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500"
          >
            Add payment methods
          </Link>
        </div>
      </div>
    </div>
  );
}
