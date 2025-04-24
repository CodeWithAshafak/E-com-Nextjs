

"use client";

import { FaHome, FaList, FaBoxOpen, FaEye, FaSearch } from 'react-icons/fa';
import React from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-8 left-4 z-30 text-white bg-gray-800 p-2 rounded-md shadow-lg"
      >
        <GiHamburgerMenu className='w-6 h-6' />
      </button>

      <aside
        className={`fixed top-22 left-0 h-full w-64 bg-gray-900 p-6 text-white 
        transform sm:mt-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 z-20 shadow-lg`}
      >
        <nav className="space-y-4 flex flex-col">
          <Link href="/dashboard/home">
            <div className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
              <FaHome className="mr-2" /> Home
            </div>
          </Link>
          <Link href="/dashboard/insertcat">
            <div className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
              <FaList className="mr-2" /> Insert Category
            </div>
          </Link>
          <Link href="/dashboard/insertproduct">
            <div className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
              <FaBoxOpen className="mr-2" /> Insert Product
            </div>+
          </Link>
          <Link href="/admindashboard/display">
            <div className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
              <FaEye className="mr-2" /> Display
            </div>
          </Link>
          <Link href="/dashboard/search">
            <div className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
              <FaSearch className="mr-2" /> Search
            </div>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
