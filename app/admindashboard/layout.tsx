
'use client'

import DashHeader from "./components/DashHeader";
import Sidebar from './components/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
    
      <div className="fixed top-0 left-0 right-0 z-30">
      <DashHeader/>
      </div>

      {/* Sidebar + Main content */}
      <div className="flex flex-1 pt-[64px] overflow-hidden"> 
        {/* Sidebar */}
        <Sidebar />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
