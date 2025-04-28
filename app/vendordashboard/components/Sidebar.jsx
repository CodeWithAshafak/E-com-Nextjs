
"use client";

import { CiEdit } from "react-icons/ci";


import { FaHome, FaList, FaBoxOpen, FaEye, FaSearch } from 'react-icons/fa';
import React from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar  = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-30 text-white bg-gray-800 p-2 rounded-md shadow-lg"
      >
        <GiHamburgerMenu className='w-6 h-6' />
      </button>

      <aside
        className={`fixed top-22 left-0 h-full w-64 bg-gray-900 p-6 text-white 
        transform sm:mt-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 z-20 shadow-lg`}
      >
        <nav className="space-y-4 flex flex-col">
          <Link href="/vendordashboard" className="no-underline flex items-center px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150 cursor-pointer">
            <div className="flex items-center">
              <FaHome className="mr-2 text-xl text-white" />
              <span className="text-white font-semibold">Home</span>
            </div>
          </Link>
          <Link href="/vendordashboard/insert" className="flex items-center px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150 cursor-pointer">
            <div className="flex items-center">
              <FaList className="mr-2 text-xl text-white" />
              <span className="text-white font-semibold" style={{textDecoration:"none"}}>Insert Product</span>
            </div>
          </Link>

          <Link href="/vendordashboard/display" className="flex items-center px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150 cursor-pointer">
            <div className="flex items-center no-underline">
              <FaEye className="mr-2 text-xl text-white" />
              <span className="text-white font-semibold">Your Products</span>
            </div>
          </Link>
          <Link href="/vendordashboard/edit" className="flex items-center px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150 cursor-pointer">
            <div className="flex items-center no-underline">
            
              <CiEdit className="mr-2 text-xl text-white" />
              <span className="text-white font-semibold">Edit Products</span>
            </div>
          </Link>



          <Link href="" className="flex items-center px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150 cursor-pointer " >
         
          <div className="flex items-center ">
              <FaSearch className="mr-2 text-xl text-white" />
              <span className="text-white font-semibold no-underline">Search</span>
            </div>

         
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
