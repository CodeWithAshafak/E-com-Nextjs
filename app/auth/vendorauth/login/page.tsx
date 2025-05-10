'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Inter, Roboto_Mono } from 'next/font/google';
import Swal from 'sweetalert2'
import { useActionState } from "react";
import { vendorlogin } from "../../../actions/vendorlogin";
import Email from '../../../actions/Email'


const inter = Inter({ subsets: ['latin'], weight: '400', variable: '--font-inter' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: '400', variable: '--font-roboto-mono' });

const initialState = {
  success: false,
  error: ''
}

export { inter, robotoMono };

const Login = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(vendorlogin, initialState);
  const [otp, setOtp] = useState('');
  function generateOtp(){

    const myOtp= Math.floor(1000 + Math.random()*900000).toString()
    setOtp(myOtp)
    return myOtp
 
}
  useEffect(() => {
    if (state.success) {
      console.log(state.vendor);
      localStorage.setItem("email",state.vendor.email)
      localStorage.setItem("vendor",state.vendor.name)
      localStorage.setItem('id',state.vendor.id)
      Swal.fire({
        title: "Login Done!",
        icon: "success",
        draggable: true
      });

      router.push("/vendordashboard");
    }
  }, [state.success, router]);

 
  return (
    <>
      <div className="w-full border border-gray-500 h-13 text-center">
        <img
          src="/logo.jpg"
          alt=""
          className="w-20 absolute top-1/22 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <img
          src="https://cdn.igp.com/raw/upload/assets/svg-icons/rebrand-login-ill.svg"
          alt=""
          width="100%"
        />
      </div>

      <div className="p-12 absolute top-90 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg w-130 h-auto">
        <div>
          
          <h4 className="text-xl inter text-center uppercase">
          Sign in
          </h4>
         
        </div>
        <form className="mt-10 space-y-6" action={formAction}>
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-center">
            <label htmlFor="emailOrMobile" className="block text-sm font-medium text-gray-700">
              Email ID  <sup>*</sup>
            </label>
            <input
              type="text"
              name="email"
              id="emailOrMobile"
              placeholder="Enter Email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:mt-0 sm:text-sm"
              required
            />
          </div>

          <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-center">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="text-sm text-gray-600 mt-4 sm:mt-0 sm:ml-4 sm:pl-4">
            <span className="block sm:inline">Don't have registration? </span>
            <Link href="/auth/vendorauth/signup" className="text-blue-600 hover:underline font-medium sm:ml-1">
              Click here
            </Link>
          </div>

          <div className="mt-6 sm:mt-0 sm:ml-4 sm:pl-4 sm:flex sm:items-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto"
            >
              SIGN IN
            </button>
          </div>
        </form>

        {state.error && (
          <p className="text-red-500 mt-4">{state.error}</p>
        )}
        <br />
        <br />
      </div>
    </>
  );
}

export default Login;

