
'use client'

// import { SessionProvider } from "next-auth/react";
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
  
    
        <div>
          <DashHeader />

          <div> 
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main
              className={`transition-all duration-300 ${
                isSidebarOpen ? 'ml-64' : 'ml-0'
              } w-full mt-20 pt-12 md:pt-24 p-4 bg-gray-50 -z-1000 `}
            >
              {children}
            </main>
          </div>
        </div>
     
 
  );
}

