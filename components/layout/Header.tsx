import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const accommodationTypes = ['Rooms', 'Mansion', 'Countryside', 'Villa', 'Apartment'];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Luxury Listings
        </Link>

        {/* Search Bar */}
        <div className="mt-4 md:mt-0 w-full md:w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search properties..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search properties"
          />
        </div>

        {/* Navigation */}
        <nav className="mt-4 md:mt-0 flex space-x-4">
          <Link href="/signin" className="text-gray-600 hover:text-blue-500">
            Sign In
          </Link>
          <Link href="/signup" className="text-gray-600 hover:text-blue-500">
            Sign Up
          </Link>
        </nav>
      </div>

      {/* Accommodation Types */}
      <div className="container mx-auto px-4 py-2 flex flex-wrap gap-2 justify-center">
        {accommodationTypes.map((type) => (
          <button
            key={type}
            className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white transition"
            aria-label={`Filter by ${type}`}
          >
            {type}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;