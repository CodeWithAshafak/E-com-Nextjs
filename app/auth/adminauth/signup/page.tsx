
"use client";
import Link from "next/link";
import { Inter, Roboto_Mono } from "next/font/google";
import adminReg from '../../../actions/adminReg'
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
const initialState = {
  success: false,
  error: "",
};

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto-mono",
});

export { inter, robotoMono };

const signup: React.FC = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(adminReg, initialState);

  if (state.success) {
 
     Swal.fire({
                   title: "SignUp Done!",
                   icon: "success",
                   draggable: true
         });
    router.push("/auth/adminauth/login");
  }else if(state.error){
    console.log(state.error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: state.error
     
    });
  }
  
  return (
    <>
      <div className="w-full border border-gray-500 h-11 text-center">
        <Image
          src="/logo.jpg"
          alt="Logo"
          className="w-20 absolute top-1/22 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-4 "
          width={50}
          height={50}
        />

        <div style={{ position: "relative", width: "100%", height: "auto" }}>
          <Image
            src="https://cdn.igp.com/raw/upload/assets/svg-icons/rebrand-login-ill.svg"
            alt="Signup Illustration"
           // layout="responsive"
            width={700}
            height={475}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="p-7 absolute top-84 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg w-130 h-auto">
        <div>
          <h4 className="text-xl inter text-center uppercase">
            Admin Registration
          </h4>

          {state?.error && <p className="text-red-600">{state.error}</p>}
        </div>

        <form className="mt-10" action={formAction}>
          <div className="flex flex-col mb-3">
            <label htmlFor="name" className="text-gray-600">
              Name <sup>*</sup>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              className="shadow-lg p-3 border border-gray-300 w-full"
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="text-gray-600">
              Email ID <sup>*</sup>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email ID"
              className="shadow-lg p-3 border border-gray-300 w-full"
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="password" className="text-gray-600">
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="shadow-lg p-3 border border-gray-300 w-full"
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="phone" className="text-gray-600">
              Mobile <sup>*</sup>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Mobile Number"
              className="shadow-lg p-3 border border-gray-300 w-full"
              required
            />
          </div>

          <div className="text-sm text-gray-600 mt-4 text-center">
             <div>
               <button type="submit" className="bg-blue-600  text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              SIGN UP
            </button>
            </div>

            <div>
            <span>Already have an account? </span>
            <Link
              href="/auth/adminauth/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Click here
            </Link>
            </div>
           
          </div>
        </form>
      </div>
    </>
  );
};

export default signup;
















// 'use client'

// import React, { useActionState } from 'react'
// import { useFormState } from 'react-dom'
// import adminReg from '../../../actions/adminReg'
// import Link from 'next/link'

// export default function Sign() {

//     const[state,formAction]=useActionState(adminReg )
//   return (
//     <>

//     <div className='m-auto w-50'>
//             <form className="m-auto" action={formAction}>
//             <div className="flex flex-col mb-3">
//               <label htmlFor="name" className="text-gray-600">
//                 Name <sup>*</sup>
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Enter Your Name"
//                 className="shadow-lg p-3 border border-gray-300 w-full"
//               />
//             </div>
//           <div className="flex flex-col mb-3">
//             <label htmlFor="email" className="text-gray-600">
//               Email ID <sup>*</sup>
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter Email ID"
//               className="shadow-lg p-3 border border-gray-300 w-full"
//             />
//           </div>
//           <div className="flex flex-col mb-3">
//             <label htmlFor="password" className="text-gray-600">
//               Password <sup>*</sup>
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter Password"
//               className="shadow-lg p-3 border border-gray-300 w-full"
//             />
//           </div>
//           <div className="flex flex-col mb-3">
//             <label htmlFor="phone" className="text-gray-600">
//               Phone Number <sup>*</sup>
//             </label>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               placeholder="Enter Phone Number"
//               className="shadow-lg p-3 border border-gray-300 w-full"
//             />
//           </div>
//           <span>Already have an account</span><Link href='/auth/adminauth/login'>Login Here</Link>

//           <div className="btn" style={{ backgroundColor: "#DD2745", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "20px" }}>
//            <button type='submit'>save</button>
//           </div>
//         </form>

//     </div>
//     </>
//   )
// }
