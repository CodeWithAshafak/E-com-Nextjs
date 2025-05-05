"use client";
import React, { useEffect, useState } from "react";
import { vendorList } from "../../actions/vendorList";
export default function page() {
  const [vendor, setVendor] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
    const fetchVendors = async () => {
      const ven = await vendorList();
      setVendor(ven);
      setFilter(ven);
      console.log(ven);
    };
    fetchVendors();
  }, []);

  function searchVendor() {
    const srch = search.toLowerCase();
    const result = vendor.filter((e) => {
      return (
        e.name.toLowerCase().includes(srch) ||
        e.email.toLowerCase().includes(srch)
      );
    });

    setFilter(result);
  }

  return (
    <>
      <div className="max-w-md mx-auto bg-gray-100 shadow-md rounded-md p-6 mt-10">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          Vendor Search
        </h4>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={searchVendor}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        {filter.length > 0 ? (
          filter.map((e) => {
            return (
              <>
                <ul>
                  <li key={e.id} className="border-b py-2">
                  <h3>Vendor List</h3>
                    <h5 className="text-sm text-gray-500">Name : {e.name}</h5>

                    <p> Email : {e.email}</p>
                    <p className="text-sm text-gray-500">Status: {e.status}</p>
                  </li>
                </ul>
              </>
            );
          })
        ) : (
          <p className="text-gray-500">No vendors found.</p>
        )}
      </div>
    </>
  );
}
