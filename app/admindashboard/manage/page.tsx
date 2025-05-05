"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { vendorList } from "../../actions/vendorList";
import { MdOutlineDelete } from "react-icons/md";
import activateVendor from "../../actions/activateVendor";
import deactivateVendor from "../../actions/deactivateVendor";
import deleteVendorAction from "../../actions/deleteVendorAction";
import { access } from "node:fs";
export default function Page() {
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deleteVendor = async (id: number) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const result = await deleteVendorAction(id);
        console.log("Delete result:", result);

        if (result?.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Vendor has been deleted.",
            icon: "success",
          });
          fetchVendors();
        } else {
          console.error("Failed to delete vendor:");
        }
      } catch (error) {
        console.error("Unexpected error deleting vendor:", error);
      }
    }
  };

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

  useEffect(() => {
    fetchVendors();
  }, []);

  console.log(show);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const ActivateVendor = (id:number)=>{
 activateVendor(id) 
  console.log("vendor activated")
  Swal.fire({
    title: "Activated!",
    text: "Vendor Activated.",
    icon: "success",
  });
  fetchVendors();
  }
  const DeactivateVendor = (id:number)=>{
    deactivateVendor(id)
    console.log('vendor deactivate')

    Swal.fire({
      title: "Deactivated!",
      text: "Vendor DeActivated.",
      icon: "success",
    });
    fetchVendors();

  }
  
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h4 className="text-lg font-bold">VENDOR LIST</h4>

      <table className="table-auto w-full border-gray-300">
        <thead className="bg-gray-100">
          <tr className="text-center">
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Phone
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Action
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Update
            </th>
          </tr>
        </thead>
        <tbody>
          {show.map((e, index) => (
            <tr key={index} className="hover:bg-gray-50 text-center">
              <td className="border border-gray-300 px-4 py-2">{e.id}</td>
              <td className="border border-gray-300 px-4 py-2">{e.name}</td>
              <td className="border border-gray-300 px-4 py-2">{e.email}</td>
              <td className="border border-gray-300 px-4 py-2">{e.phone}</td>
              <td className="border border-gray-300 px-4 py-2 flex justify-around items-center">
                

               {e.status === 'pending' ? (
                  <button
                    onClick={() => ActivateVendor(e.id)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Activate
                  </button>
                ) : (
                  <button
                    onClick={() => DeactivateVendor (e.id)}
                    className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                )} 
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <MdOutlineDelete
                  size={25}
                  className="text-red-700 cursor-pointer ml-5 text-center"
                  onClick={() => deleteVendor(e.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
