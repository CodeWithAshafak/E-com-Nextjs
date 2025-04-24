"use client";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { useState } from "react";
import Link from "next/link";

const Login = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Login to Your Account
          </h1>

          <div>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
              >
                Login
              </button>

              <p className="text-sm text-center text-gray-600">
                Don't have an account?{" "}
                <Link href="/pages/register">Register</Link>
              </p>
            </form>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <ClerkProvider>
              <header className="w-full flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 rounded-lg transition duration-200">
                <SignedOut>
                  <SignInButton />
                  <SignUpButton />
                </SignedOut>

                <button className="w-full flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 rounded-lg transition duration-200" >
                  <SignedIn className="w-full flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 rounded-lg transition duration-200">
                    <UserButton />
                  </SignedIn>
                </button>


              </header>
            </ClerkProvider>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
