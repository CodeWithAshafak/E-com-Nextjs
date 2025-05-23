// 'use client'
// import { useEffect, useState } from 'react';

// import { cartdisplay } from "../../actions/cartdisplay";
// import { useDispatch, useSelector } from "react-redux";
// import { add } from "../../redux/cartSlice";
// import { addfav } from "../../redux/favSlice";
// import toast, { Toaster } from 'react-hot-toast';
// interface Product {
//   id: number;
//   proname: string;
//   prodetails: string;
//   categroy: string;
//   price: number;
//   warranty: string;
//   createdAt: Date;
//   image?: string;
// }
// export default function page() {


//   const dispatch = useDispatch();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);



//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await cartdisplay();
//         setProducts(data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);
//   console.log('products are :-',products);

  
//   return (
//     <>
//     <Header/>

//      <div className='mt-20'>
//        <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center'>Same Day Delivery Gifts</h3>



//      </div>




//     <Footer/>
//     </>
    
//   );
// }




"use client";
import { useState, useEffect } from "react";
import { cartdisplay } from "../../actions/cartdisplay";
import { useDispatch } from "react-redux";
import Footer from '../../Componets/Footer';
 import Header from '../../Componets/Header'
import { add } from "../../redux/cartSlice";
import { addfav } from "../../redux/favSlice";
import toast, { Toaster } from "react-hot-toast";

export default function Cart() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await cartdisplay();
        setProducts(data);
        console.log(data)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center mt-10">
        <img src="/loader/loader.gif" alt="Loading..." width="200" height="200" />
      </div>
    );

  if (error)
    return (
      <p className="text-center text-red-500 mt-5">Error: {error.message}</p>
    );

  return (
    <>
     <Header/>
      <div className="container mx-auto px-4 mt-20 ">
        <h3 className="text-center text-2xl font-semibold mb-6">Same Day Delivery Gifts</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.filter((e) => e.categroy === 'Same Day Delivery').map((product) => (
            <div className="card bg-base-100 shadow-md w-full" key={product.id}>
              <figure className="px-5 pt-5">
                <img
                  src={product.image}
                  alt={product.proname}
                  className="rounded-xl h-60 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h5 className="card-title text-gray-700">{product.proname}</h5>
                <p className="text-lg">
                  <strong>Price:</strong> ₹{product.price}
                </p>
                <div className="card-actions flex justify-center items-center gap-4 mt-4">
                  <button
                    onClick={() => {
                      dispatch(add({ ...product, quantity: 1 }));
                    }}
                    className="btn bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      dispatch(addfav(product));
                    }}
                    className="btn bg-gradient-to-r from-pink-500 to-pink-700 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-800 text-white"
                  >
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      //     <Footer/>
    </>
  );
}
