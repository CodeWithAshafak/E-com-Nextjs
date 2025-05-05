'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { addfav, removefav } from '../../redux/favSlice';
import { add } from '../../redux/cartSlice';
import Header from '../../Componets/Header';
import Footer from '../../Componets/Footer'
const FavouritePage = () => {
  const dispatch = useDispatch();
  const favouriteProducts = useSelector((state) => state.addtofav.fav);

  return (

    <>
    <Header />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-6 mt-10">
       
      <h3 className="text-4xl font-bold text-indigo-500 mt-5 mb-4 text-center">Wishlist</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {favouriteProducts?.length > 0 ? (
          favouriteProducts.map((key, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <div className="flex items-center justify-between">
                {key.image && (
                  <img
                    src={key.image}
                    alt="product image"
                    className="w-56 h-56 rounded-lg object-cover"
                  />
                )}
                <div className="ml-4 md:ml-6 flex-1">
                  <h5 className="text-2xl font-semibold text-gray-800">{key.proname}</h5>
                  <p className="text-gray-600 mt-1">{key.description}</p>
                  <p className="text-gray-700 font-bold mt-2">Price {key.price}</p>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  className="py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-300"
                  onClick={() => dispatch(add({ ...key, quantity: 1 }))}
                >
                  Add to Cart
                </button>
                <button
                  className="py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-300"
                  onClick={() => dispatch(removefav(key.id))}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-2xl text-gray-600">No favourite products</p>
        )}
      </div>
    </div>

    <Footer/>
    </>
  );

};

export default FavouritePage;
