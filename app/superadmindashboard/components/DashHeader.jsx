"use client";

import React from "react";

const DashHeader = () => {
  return (
    <>
    
    
      <nav className="bg-gray-800 p-4 fixed flex justify-between items-center w-full ">
        <h3 className="text-sm font-extrabold pl-20 text-white"> Super Admin Dashboard </h3>

        <div className="flex items-center space-x-4">
          <p className="text-white text-sm">Signed in as</p>

          {/* <button className="text-red-500 hover:text-red-600 font-bold text-sm px-4 py-2 rounded border-2 border-red-500 hover:border-red-600 transition">
            Sign Out
          </button> */}
        </div>
      </nav>

    
    </>
  );
};

export default DashHeader;
