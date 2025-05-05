'use client'
import DashboardTopbar from './components/DashboardTopbar';
import Sidebar from './components/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <div className="bg-white min-h-screen fixed">
      <DashboardTopbar />
      <div className="flex text-black">
        <div className="sticky -mt-2">
          <Sidebar /> 
        </div>
        <div className="text-black w-full mt-30 p-2 -z-50">{children}</div>
      </div>
    </div>
  </>
);

export default Layout;
