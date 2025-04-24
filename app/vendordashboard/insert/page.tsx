"use client";

import React, { useActionState } from "react";
import { useFormState } from 'react-dom';
import { vendorInsertProduct } from "../../actions/vendorInsertProduct";

const initialState = {
  success: false,
  error: ''
};

const Page: React.FC = () => {
  const [state, formAction] = useActionState(vendorInsertProduct, initialState);
   
  return (
    <>
  
    <div className="max-w-md   mx-auto p-6 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Insert Product</h1>
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

