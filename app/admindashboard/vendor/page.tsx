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
    <div>
   
      <h1 className='text-center'>Vendor List </h1>

      <table className="min-w-full table-auto border-collapse border border-gray-300">
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
  );
}




// 'use client';
// import { useState, useEffect } from 'react';
// import { getVendorProducts } from "../../actions/vendordisplay";

// export default function DisplayProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage, setProductsPerPage] = useState(4);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getVendorProducts();
//         setProducts(data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <img src="/loader/loader.gif" alt="Loading..." width='400' height='400' className="m-auto" />;

//   if (error) return <p>Error: {error.message}</p>;

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   const paginate = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <>
//       <h3 className="text-4xl font-extrabold mb-4 self-center" >Vendor Products</h3>
     
//     <table className="table-auto w-full">
      
//       <thead>
//         <tr className="bg-gray-100">
//           <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</th>
//           <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
//           <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Details</th>
//           <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Price</th>
//           <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Warranty</th>
//           <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Image</th>
//         </tr>
//       </thead>
//       <tbody className="bg-white">
//         {currentProducts.map((product) => (
//           <tr key={product.id} className="hover:bg-gray-100">
//             <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.id}</td>
//             <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.proname}</td>
//             <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.prodetails}</td>
//             <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.price}</td>
//             <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.warranty}</td>
//             <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
//               <img src={product.image} alt={product.proname}  />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
    
//     <div className="flex justify-center">
//       <nav className="flex justify-center">
//         <ul className="flex">
//           {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
//             <li key={number + 1}>
//               <button className="inline-block px-4 py-2 mx-2 text-white bg-blue-600 rounded-md hover:bg-blue-700" onClick={() => paginate(number + 1)}>
//                 {number + 1}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//     </>
//   );
// }

