"use client";
import React, { useActionState } from "react";
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation";
import { vendorInsertProduct } from "../../actions/vendorInsertProduct";
const initialState = {
  success: false,
  error: ''
};

const Page: React.FC = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(vendorInsertProduct, initialState);
    if (state?.success) {
     
      Swal.fire({
        title: "Product Added!",
        icon: "success",
        draggable: true
      });
 
    }else if(state?.error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
  
      });

    }
   
  return (
    <>
  
     <div className="bg-white-300 p-4 pb-6  m-auto w-2/3 relative border border-b-cyan-300 ">

      <h3 className="text-4xl font-extrabold mb-4 text-center uppercase" >Insert Product</h3>
      <p className="text-gray-600 mb-4">Please fill in the details below:</p>
      <form
        action={formAction}
        onSubmit={(e) => {
          const form = e.currentTarget;
          const formData = new FormData(form);

          console.log('proname:', formData.get('proname'));
          console.log('prodetails:', formData.get('prodetails'));
          console.log('categroy:', formData.get('categroy'));
          console.log('price:', formData.get('price'));
          console.log('warranty:', formData.get('warranty'));
        }}
        className="space-y-4"
      >
        <label htmlFor="proname">Enter Product Name</label>
        <input
          name="proname"
          placeholder="Product Name"
          required
          className="w-full p-2 border rounded"
        />

        <label htmlFor="prodetails">Product Details</label>
        <input
          name="prodetails"
          placeholder="Product Details"
          type="text"
          required
          className="w-full p-2 border rounded"
        />

        <label htmlFor="categroy">Product Category</label>
        <select name="categroy" required className="w-full p-2 border rounded">
          <option value="">Select Category</option>
          <option value="Laptop">Laptop</option>
          <option value="Mobile">Mobile</option>
          <option value="TV">TV</option>
          <option value="Gift">Gift</option>
          <option value="Plant">Plant</option>
          <option value="Same Day Delivery">Same Day Delivery</option>
          <option value="Food and beverage">Food and beverage</option>
        </select>
      
        <label htmlFor="image">Product Image</label>
        <input
          name="image"
          type="file"
          required
          className="w-full p-2 border rounded"
        />

        <label htmlFor="price">Product Price</label>
        <input
          name="price"
          placeholder="Enter Price"
          type="text"
          required
          className="w-full p-2 border rounded"
        />

        <label htmlFor="warranty">Product Warranty</label>
        <input
          name="warranty"
          placeholder="Enter Product Warranty"
          type="text"
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save Data
        </button>
      </form>

      {state?.success && (
        <p className="mt-4 text-center text-green-600">
         Dear vendor your product is successfully inserted !
        </p>


      )}
      {state?.error && (
        <p className="mt-4 text-center text-red-600">{state.error}</p>
      )}
    
  
    </div>
 
    </>
  )
}

export default Page;

