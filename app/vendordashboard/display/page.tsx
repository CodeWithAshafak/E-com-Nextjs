 "use client"
import { useEffect, useState } from "react";
import { getVendorProducts } from "../../actions/vendordisplay";


const DisplayProductsPage = async () => {
   const [mydata ,setMydata] = useState([])

  const loadData = async () =>{
    const products = await getVendorProducts();
    console.log(products)
    setMydata(products)
  }
  
  useEffect(()=>{loadData()},[])

  return (
    <>
    
    {/* <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-4 border">#</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Details</th>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Warranty</th>
            <th className="py-2 px-4 border">Created At</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="border-t">
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{product.proname}</td>
              <td className="py-2 px-4 border">{product.prodetails}</td>
              <td className="py-2 px-4 border">{product.categroy}</td>
              <td className="py-2 px-4 border">₹{product.price}</td>
              <td className="py-2 px-4 border">{product.warranty}</td>
              <td className="py-2 px-4 border">{new Date(product.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> */}
    </>
  );
};

export default DisplayProductsPage;




