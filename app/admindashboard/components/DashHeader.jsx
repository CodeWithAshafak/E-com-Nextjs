"use client";

import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const DashHeader = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 sticky top-0 left-0 right-0 z-10 flex justify-between items-center w-full mb-10  ">
        <h3 className="text-sm font-extrabold pl-20 text-white">
          Admin Dashboard{" "}
        </h3>

        <div className="flex items-center space-x-4">
          <div>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashHeader;

