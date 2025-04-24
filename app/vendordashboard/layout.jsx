

'use client'

import { SessionProvider } from "next-auth/react";
import DashHeader from "./components/DashHeader";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "next-themes";
import { useState } from "react";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <ThemeProvider attribute="class">
      <SessionProvider>
        <div className="flex flex-col min-h-screen">
          <DashHeader />

          <div className="flex flex-1 pt-16 relative"> 
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main
              className={`transition-all duration-300 ${
                isSidebarOpen ? 'ml-64' : 'ml-0'
              } w-full mt-30  p-4 bg-gray-50`}
            >
              {children}
            </main>
          </div>
        </div>
      </SessionProvider>
    </ThemeProvider>
  );
}

