
"use client";
import { GiCaptainHatProfile } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaBars } from "react-icons/fa";
import { BsDisplay, BsShop, BsFillCartFill } from "react-icons/bs";
import { MdOutlineRequestPage } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiEdit } from "react-icons/ci";
import { FaHome, FaList, FaBoxOpen, FaEye, FaSearch } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative z-100">
        <button
          className="fixed top-7 left-4 z-20 text-white bg-[#212529] p-2 rounded"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        <div
          className={`absolute  top-0 left-0 h-screen w-64 bg-[#212529] p-4 mt-4 
          transition-transform transform md:-top-5 sm:-top-5 lg:-top-10 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ marginRight: isOpen ? 0 : "64px" }}
        >
          <nav className="space-y-4 flex flex-col">
            <Link
              href="/superadmindashboard"
              className="no-underline flex items-center px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150 cursor-pointer"
            >
              <div className="flex items-center">
                <FaHome className="mr-2 text-xl text-white" />
                <span className="text-white font-semibold">Home</span>
              </div>
            </Link>

            <Link
              href="/superadmindashboard/vendors"
              className="flex items-center px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150 cursor-pointer"
            >
              <div className="flex items-center no-underline">
                <GiCaptainHatProfile className="mr-2 text-xl text-white" />
                <span className="text-white font-semibold">Vendors</span>
              </div>
            </Link>

            <Link
              href="/superadmindashboard/customers"
              className="flex items-center px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150 cursor-pointer"
            >
              <div className="flex items-center no-underline">
                <CgProfile className="mr-2 text-xl text-white" />
                <span className="text-white font-semibold decoration-none">
                  Customers
                </span>
              </div>
            </Link>
          </nav>
        </div>
        {isOpen ? (
          <div className="ml-64">{/* Content inside sidebar when open */}</div>
        ) : null}
      </div>
    </>
  );
};

export default Sidebar;
