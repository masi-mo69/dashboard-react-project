import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Domain portfolio</h1>
      <div className="flex flex-col items-center justify-center bg-gray-50 border rounded-lg p-10">
        <div className="text-gray-400 mb-4 text-5xl">🌐</div>
        <p className="font-semibold mb-2">Get a domain to get your website online</p>
        <p className="text-gray-600 mb-4 text-center">
          Register a new domain or transfer a domain you already own.
        </p>
        <div className="flex gap-4">
          <Link
            to="/domains/new"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500"
          >
            Get new domain
          </Link>
          <Link
            to="/domains/transfers"
            className="text-purple-600 px-4 py-2 rounded border border-purple-600 hover:bg-purple-50"
          >
            Transfer domain
          </Link>
        </div>
      </div>
    </div>
  );
}
