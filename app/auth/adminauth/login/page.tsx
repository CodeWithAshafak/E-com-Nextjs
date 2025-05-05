"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Inter, Roboto_Mono } from "next/font/google";
import Swal from "sweetalert2";
import { useActionState } from "react";
import adminLog from '../../../actions/adminLog'
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
const initialState = {
  success: false,
  error: "",
};
export { inter, robotoMono };
const Login: React.FC = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(adminLog, initialState);

  useEffect(() => {
    if (state.success) {
      console.log("data from backend to frontend", state);
      localStorage.setItem("email", state.admin.email);
      localStorage.setItem("admin", state.admin.name);
      localStorage.setItem("id", state.admin.id);

      Swal.fire({
        title: "Login Done!",
        icon: "success",
        draggable: true,
      });

      router.push("/admindashboard");
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
           Admin Sign in
          </h4>
        </div>
        <form className="mt-10" action={formAction}>
          <div className="flex flex-col mb-4">
            <label htmlFor="emailOrMobile" className="text-gray-600">
              Email ID or Mobile Number <sup>*</sup>
            </label>
            <input
              type="text"
              name="email"
              id="emailOrMobile"
              placeholder="Enter Email"
              className="shadow-lg p-3 border border-gray-300 w-full"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
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

          <div className="text-sm text-gray-600 mt-4">
            <span>Don't have registration? </span>
            <Link
              href="/auth/adminauth/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Click here
            </Link>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5"
          >
            SIGN IN
          </button>
        </form>

        {state.error && <p className="text-red-500 mt-4">{state.error}</p>}

        {/* <div className="relative flex justify-end top-7">
          <p className="text-gray-500">Forgot Password ?</p>
        </div> */}
        <br />
        <br />
      </div>
    </>
  );
};

export default Login;
