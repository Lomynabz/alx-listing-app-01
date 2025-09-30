import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Luxury Listings</h3>
            <p className="text-sm">Find your dream property worldwide.</p>
          </div>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Link href="/about" className="hover:text-blue-300">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-blue-300">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-blue-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-300">
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="mt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Luxury Listings. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;