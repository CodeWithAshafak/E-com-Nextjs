"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Script from "next/script";
import Header from "../../Componets/Header";

import Footer from "../../Componets/Footer";
import createOrder from "../../actions/createOrder";
import verifyOrder from "../../actions/verifyOrder";
import OrderDatabase from "../../actions/orderDatabase";
import { removeallProduct } from "../../redux/cartSlice";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import { generateInvoicePDF } from "../../actions/generateInvoicePDF ";
const CheckoutPage: React.FC = () => {
  const { user } = useUser();
  console.log("user", user);
  const dispatch = useDispatch();
  const router = useRouter();
  const product = useSelector((state: any) => state.addtocart.cart);
  const [total, setTotal] = useState<number>(0);
  const [userInfo, setUserInfo] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  const [address, setAddress] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    const name =
      typeof window !== "undefined" ? localStorage.getItem("name") : null;
    const email =
      typeof window !== "undefined" ? localStorage.getItem("email") : null;
    setUserInfo({ name, email });
  }, []);

  useEffect(() => {
    const totalPrice = product.reduce(
      (acc: number, key: any) => acc + key.quantity * key.price,
      0
    );
    setTotal(totalPrice);
  }, [product]);

  const handlePayment = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const orderData = {
      user: {
        name: user?.fullName,
        email: user?.emailAddresses[0].emailAddress,
        address,
        pincode,
        phoneNumber,
      },
      amount: total,
      products: product.map((key: any) => ({
        productId: key.id,
        productName: key.proname,
        quantity: key.quantity,
        price: key.price,
        image: key.image,
      })),
    };

    try {
      const order = await createOrder(
        orderData.amount,
        orderData.user,
        orderData.products
      );

      const paymentData = {
        key: "rzp_test_dqhXRIw12Hn1KY",
        amount: order.amount,
        currency: "INR",
        order_id: order.id,
        handler: async (response: any) => {
          const verifyRes = await verifyOrder(
            response.razorpay_order_id,
            response.razorpay_payment_id,
            response.razorpay_signature
          );
          if (verifyRes.isOk) {
            const orderResponse = await OrderDatabase({ response, orderData });
            if (orderResponse) {
              dispatch(removeallProduct({}));
              generateInvoicePDF(
                order.id, 
                orderData.user.name,
                orderData.user.email,
                orderData.user.address,
                orderData.user.phoneNumber,
                orderData.user.pincode,
                orderData.products,
                orderData.amount
              );

              router.push("/pages/thankyou");
            } else {
              console.error("Order database error");
              toast.error(" Order database error");
            }
            toast.success(" Payment successful");
          } else {
            console.error("Payment verification failed");
            toast.error(" Payment verification failed");
          }
        },
        theme: { color: "#3399cc" },
      };

      if (typeof window !== "undefined" && (window as any).Razorpay) {
        const paymentObject = new (window as any).Razorpay(paymentData);
        paymentObject.open();
      } else {
        toast.error(" Razorpay SDK not loaded.");
      }
    } catch (err) {
      console.error("Error during payment handling:", err);
      toast.error(" Something went wrong. Please try again.");
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Header />

      {product.length > 0 ? (
        <div className="container mx-auto p-4 mt-15">
          <h3 className="text-4xl font-extrabold mb-6 text-center text-indigo-600 uppercase">
            Checkout
          </h3>
          <div className="flex flex-col md:flex-row mt-15 space-x-0 md:space-x-4">
            <div className="w-full md:w-1/2 md:mr-4">
              <h5 className="text-2xl font-bold mb-4 uppercase">Cart Items</h5>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Product Name</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((key: any, index: number) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">
                        <img src={key.image} alt={key.proname} />
                      </td>
                      <td className="px-4 py-2">{key.proname}</td>
                      <td className="px-4 py-2">Rs. {key.price}</td>
                      <td className="px-4 py-2">{key.quantity}</td>
                      <td className="px-4 py-2">
                        Rs. {key.quantity * key.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h5 className="text-2xl font-bold mt-4 ">
                Total Payable Amount: ₹ {total}
              </h5>
            </div>

            <div className="w-full md:w-1/2 md:ml-4">
              <h5 className="text-2xl font-bold mb-4 uppercase ">
                Shipping Details
              </h5>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={user.fullName}
                    readOnly
                    className="w-full px-4 py-2 border rounded-md bg-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={user.emailAddresses[0].emailAddress}
                    readOnly
                    className="w-full px-4 py-2 border rounded-md bg-gray-100"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block mb-2">
                    Address:
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="pincode" className="block mb-2">
                    Pincode:
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block mb-2">
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>
                <button
                  onClick={handlePayment}
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-30 border border-amber-400 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-center text-2xl font-bold mb-4">
            Your Cart is Empty
          </h3>
          <Image
            src="/loader/emptycart.gif"
            alt="empty cart gif"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
      )}

      <Footer />
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
    </>
  );
};

export default CheckoutPage;
