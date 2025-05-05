
'use client';
import { useState, useEffect } from 'react';
import { getVendorProducts } from "../../actions/vendordisplay";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import deleteVendorPro from '../../actions/deleteVendorPro';
import Swal from 'sweetalert2';

export default function DisplayProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);


  const fetchProducts = async () => {
    try {
      const data = await getVendorProducts();
      console.log("Products data:", data);
      setProducts(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <img src="/loader/loader.gif" alt="Loading..." width='400' height='400' className="m-auto" />;

  if (error) return <p>Error: {error.message}</p>;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
 

  const deleteProduct = async (id:number)=>{
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })

    if(result?.isConfirmed){
      try {
        const result = await deleteVendorPro(id);
        console.log("Delete result:", result);
    
        if (result?.success) {
          Swal.fire({
            title: "Deleted!",
            text: "product has been deleted.",
            icon: "success"
          });
          fetchProducts();
        
        } else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:error,
  
        });
        console.error("Unexpected error deleting product:", error);
        
      }
    }
  }

   
  return (
    <>
      <h3 className="text-4xl font-extrabold mb-4 text-center" >Edit Your Products</h3>
     
    <table className="table-auto w-full">
      
      <thead>
        <tr className="bg-gray-100">
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</th>
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Details</th>
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Price</th>
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Warranty</th>
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Image</th>
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
           Delete
          </th>
          {/* <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
           Edit 
          </th> */}
        </tr>
      </thead>
      <tbody className="bg-white">
        {currentProducts.map((product) => (
          <tr key={product.id} className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.id}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.proname}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.prodetails}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.price}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.warranty}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <img src={product.image} alt={product.proname}  />
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <RiDeleteBin2Fill className="text-red-600 hover:text-red-900 w-9 h-9" onClick={() => deleteProduct(product.id)}/>
            </td>
            {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <CiEdit className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out w-9 h-9 " />
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
    
    <div className="flex justify-center">
      <nav className="flex justify-center">
        <ul className="flex">
          {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
            <li key={number + 1}>
              <button className="inline-block px-4 py-2 mx-2 text-white bg-blue-600 rounded-md hover:bg-blue-700" onClick={() => paginate(number + 1)}>
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    </>
  );
}


