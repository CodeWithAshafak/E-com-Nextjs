"use client"
import Link from 'next/link'

const DashboardTopbar : React.FC = () => {
  return (
    <div className="bg-[#212529] p-4 fixed w-full">
      <div className="flex justify-between">
        <h3 className="text-white text-2xl font-semibold ml-10 uppercase">Super Admin Dashboard</h3>
      </div>
    </div>
  );
}

export default DashboardTopbar;   

