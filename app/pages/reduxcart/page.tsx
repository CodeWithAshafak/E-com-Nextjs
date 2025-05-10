"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} from "../../redux/cartSlice";
import { useRouter } from "next/navigation";
import Header from "../../Componets/Header";
import { MdDeleteOutline } from "react-icons/md";
import { useUser } from "@clerk/nextjs";
import Swal from "sweetalert2";
import { FaMinusSquare } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";

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
  const { isSignedIn } = useUser();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.addtocart.cart);
 // console.log('total product is', product);
  const [total, setTotal] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    let totalPrice = 0;
    product.forEach((p) => {
      totalPrice += p.quantity * p.price;
    });
    setTotal(totalPrice);
  }, [product]);

  const isSign = () => {
    if (!isSignedIn) {
      Swal.fire({
        title: " Please LogIn !",
        width: 600,
        padding: "3em",
        color: "bg-red-500",
        background: "#fff url()",
        backdrop: `
          rgba(0,0,123,0.4)
          // url("/images/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
    }
    else{
      router.push("/pages/checkout");
    }

  };

  return (
    <>
      <Header />

      {product?.length>0 ? ( <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h3 className="text-4xl font-extrabold uppercase  text-indigo-500 mt-5 mb-4 text-center">
          Shopping Cart
        </h3>
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
          <tbody className="bg-white divide-y divide-gray-200">
            {product.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <img
                    src={p.image}
                    alt={p.proname}
                    className="w-20 h-20 rounded"
                  />
                </td>

                <td className="px-6 py-4">{p.proname}</td>
                <td className="px-6 py-4">{p.quantity}</td>
                <td className="px-6 py-4">{p.price}</td>
                <td className="flex items-center justify-center mt-9">
                  <FaMinusSquare
                    onClick={() => dispatch(decreaseQuantity(p))}
                    size={25}
                    className="text-gray-500 hover:text-gray-700 transition duration-300 mr-2"
                  />

                  <span className="font-medium text-sm">{p.quantity}</span>

                  <FaSquarePlus
                    onClick={() => dispatch(increaseQuantity(p))}
                    size={25}
                    className="text-gray-500 hover:text-gray-700 transition duration-300 ml-2"
                  />
                </td>

                <td className="px-6 py-4 text-center">
                  {p.quantity * p.price}
                </td>

                <td className="px-6 py-4 text-right">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                    onClick={() => dispatch(removeProduct(p))}
                  >
                    <MdDeleteOutline size={23} />
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={6} className="px-6 py-4 text-right font-bold">
                <h5>Total ₹ : {total}</h5>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={isSign}
                >
                  Checkout
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>) : (
        <div className="flex flex-col justify-center items-center mt-30 border border-amber-400 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-center text-2xl font-bold mb-4">Your Cart is Empty</h3>
          <Image src="/loader/emptycart.gif" alt="empty cart gif" width={400} height={400} className="mx-auto" />

        </div>
      ) }
    </>
  );
};

export default page;
