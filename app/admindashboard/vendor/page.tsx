"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import {vendorList }from "../../actions/vendorList";
export default  function page() {
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const data = await vendorList();
        setShow(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchVendors();
  }, []);

  console.log(show);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
    
  
    <div className='flex flex-col justify-center items-center ' style={{border:"2px"}}>
       
       <h4 className='text-lg font-bold'>VENDOR LIST</h4>

      <table className="table-auto w-full border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {show.map((e, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{e.id}</td>
              <td className="border border-gray-300 px-4 py-2">{e.name}</td>
              <td className="border border-gray-300 px-4 py-2">{e.email}</td>
              <td className="border border-gray-300 px-4 py-2">{e.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  );
}


