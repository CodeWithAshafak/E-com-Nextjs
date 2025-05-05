"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdNotificationsActive } from "react-icons/md";

const DashboardTopbar: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const name =
        typeof window !== "undefined" ? localStorage.getItem("vendor") : null;
      const email =
        typeof window !== "undefined" ? localStorage.getItem("email") : null;
      setName(name || "");
      setEmail(email || "");
    }
  }, []);

  return (
    <>
      <nav className="bg-gray-800 p-4 fixed flex justify-between items-center w-full ">
        <h3 className="text-sm font-extrabold pl-20 text-white uppercase">
          Vendor Dashboard
        </h3>

        <div className="flex items-center space-x-4 pr-10">
          <h6 className="text-white font-semibold">
            Welcome {name || "Guest"}
          </h6>
          <h6 className="text-white text-sm">{email || "No Email"}</h6>

          <span><MdNotificationsActive className="text-white cursor-pointer" size={26} /></span>

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
            onClick={() => {
              localStorage.clear(), router.push("/");
            }}
          >
            Signout
          </button>
        </div>
      </nav>
    </>
  );
};

export default DashboardTopbar;
