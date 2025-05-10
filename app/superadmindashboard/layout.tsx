// 'use client'
// import DashboardTopbar from './components/DashboardTopbar';
// import Sidebar from './components/Sidebar';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => (
//   <>
//     <div className="bg-white min-h-screen fixed">
//       <DashboardTopbar />
//       <div className="flex text-black">
//         <div className="sticky -mt-2">
//           <Sidebar /> 
//         </div>
//         <div className="text-black w-full mt-30 p-2 -z-50">{children}</div>
//       </div>
//     </div>
//   </>
// );

// export default Layout;









'use client'

import DashboardTopbar from './components/DashboardTopbar';
import Sidebar from './components/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
    
      <div className="fixed top-0 left-0 right-0 z-30">
      
      <DashboardTopbar/>
      </div>

  
      <div className="flex flex-1 pt-[64px] overflow-hidden"> 
     
        <Sidebar />

   
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
