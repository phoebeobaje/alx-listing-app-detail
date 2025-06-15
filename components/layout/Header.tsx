import Link from "next/link";
import React from "react";
import { ACCOMODATION_TYPES } from "@/constants";


const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md p-4">
      {/* Top Row: Logo, Search, Auth Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-teal-600">
          <Link href="/">ALX-BNB</Link>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search accommodations..."
          className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-64"
        />

        {/* Auth Buttons */}
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm text-teal-600 border border-teal-600 rounded-full hover:bg-teal-50">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm text-white bg-teal-600 rounded-full hover:bg-teal-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Bottom Row: Accommodation Types */}
      <nav className="mt-4 flex flex-wrap justify-center gap-4 text-sm font-medium">
        {ACCOMODATION_TYPES.map((type) => (
          <a key={type} href={`#${type.toLowerCase()}`} className="hover:text-teal-500">
            {type}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
