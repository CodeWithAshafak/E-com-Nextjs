// "use client";

// import { useRouter } from "next/navigation";

// import  { useEffect, useState } from "react";

// const DashHeader : React.FC= () => {
//   const router = useRouter();
//   const [name, setName] = useState<string>("");
  
//   useEffect(() => {
//     const [name, setName] = useState<string>("");
//     const storedName = localStorage.getItem("name");
//     if (storedName) {
//       setName(storedName);
//     }
//   }, []);
//   const signout = () => {
//     localStorage.clear();
//     router.push('/auth/vendorauth');
//   };


//   return (
//     <>
    
    
//       <nav className="bg-gray-800 p-4 fixed flex justify-between items-center w-full ">
//         <h3 className="text-sm font-extrabold pl-20 text-white">Vendor Dashboard </h3>

//         <div className="flex items-center space-x-4">
//           <p className="text-white text-md">Signed in as {localStorage.getItem("name") || ''}</p>

//           <button className="text-red-500 hover:text-red-600 font-bold text-sm px-4 py-2 rounded border-2 border-red-500 hover:border-red-600 transition pointer" onClick={signout}
//           >
//             Sign Out
//           </button>
//         </div>
//       </nav>

    
//     </>
//   );
// };

// export default DashHeader;






"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DashHeader: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
    const email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
    }
  }, []);

  const signout = () => {
    alert("You have been signed out successfully.");
    localStorage.clear();
    router.push('/auth/vendorauth');
  };

  return (
    <>
      <nav className="bg-gray-800 p-4 fixed flex justify-between items-center w-full">
        <h3 className="text-sm font-extrabold pl-20 text-white">Vendor Dashboard</h3>

        <div className="flex items-center space-x-4">
          <h6 className="text-white font-semibold">Welcome <span className="font-normal">{name}</span></h6>
          <p className="text-white text-sm">{email}</p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out cursor-pointer" onClick={signout}>
            Sign Out
          </button>
        </div>
      </nav>
    </>
  );
};

export default DashHeader;
