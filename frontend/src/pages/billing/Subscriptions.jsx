import React from 'react';
import { Link } from 'react-router-dom';

export default function Subscriptions() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Subscription</h1>
      <div className="flex flex-col items-center justify-center bg-gray-50 border rounded-lg p-10">
        <div className="text-gray-400 mb-4 text-5xl">🌐</div>
        <p className="font-semibold mb-2">Get your first subscription</p>
        <p className="text-gray-600 mb-4 text-center">
          Choose which hosting, domain, email or VPS services your business needs.
        </p>
        <div className="flex gap-4">
          <Link
            to="/domains/transfers"
            className="text-purple-600 px-4 py-2 rounded border border-purple-600 hover:bg-purple-50"
          >
            Get subscription
          </Link>
        </div>
      </div>
    </div>
  );
}
