
'use client'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { increaseQuantity, decreaseQuantity, removeProduct } from '../../redux/cartSlice';
import { useRouter } from 'next/navigation';
import Header from '../../Componets/Header';
import { MdDeleteOutline } from "react-icons/md";

interface RootState {
  addtocart: {
    cart: {
      id: string;
      image: string;
      proname: string;
      price: number;
      quantity: number;
    }[];
  };
}

const page: React.FC = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.addtocart.cart); 

  const [total, setTotal] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    let totalPrice = 0;
    product.forEach((p) => {
      totalPrice += p.quantity * p.price;
    });
    setTotal(totalPrice);
  }, [product]);

  return (
    <>
    
    <Header/>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-5xl font-extrabold text-center mb-8 tracking-wide uppercase bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        Shopping Cart
      </h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-green-200">
            <th className="px-6 py-3 text-left">Image </th>
            <th className="px-6 py-3 text-left">Product</th>
            <th className="px-6 py-3 text-center">Quantity</th>
            <th className="px-6 py-3 text-right">Price</th>
            <th className="px-6 py-3 text-right">Change Quantity</th>
            <th className="px-6 py-3 text-right">Total Amount</th>
            <th className="px-6 py-3 text-right">Action</th>
            
          </tr>
        </thead>
        <tbody>
          {product.map((p) => (
            <tr key={p.id} className="hover:bg-gray-100">
              <td className="px-6 py-4">
                
                 <img src={p.image}  alt={p.proname} className='w-20 h-20' />

              </td>
           
              <td className="px-6 py-4">{p.proname}</td>
              <td className="px-6 py-4">{p.quantity}</td>
              <td className="px-6 py-4">{p.price}</td>
         

              <td className="px-6 py-4  p-10 text-center flex items-center justify-center space-x-2">
                
          
                <button onClick={() => dispatch(decreaseQuantity(p))} className="bg-gray-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"> - </button>
           
               
                {p.quantity}
                 
                
                <button onClick={() => dispatch(increaseQuantity(p))} className="bg-gray-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"> + </button>

              </td>

          
              <td className="px-6 py-4 text-center">{p.quantity * p.price}</td>


              <td className="px-6 py-4 text-right">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded" onClick={() => dispatch(removeProduct(p))}>
                <MdDeleteOutline  size={23}/>
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={4} className="px-6 py-4 text-right font-bold">Total: {total}</td>
            <td className="px-6 py-4 text-right">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => router.push('/pages/checkout')}>Checkout</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default page;