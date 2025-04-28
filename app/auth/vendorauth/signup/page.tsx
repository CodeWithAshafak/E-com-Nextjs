"use client";
import Link from "next/link";
import { Inter, Roboto_Mono } from "next/font/google";
import { vendorsignup } from "../../../actions/vendorsignup";
import { useActionState } from "react";
import { useRouter } from "next/navigation";

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

const Page: React.FC = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(vendorsignup, initialState);

  if (state.success) {
    router.push("../vendorauth");
  }

  return (
    <>
      <div className="w-full border border-gray-500 h-13 text-center">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="w-20 absolute top-1/22 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <img
          src="https://cdn.igp.com/raw/upload/assets/svg-icons/rebrand-login-ill.svg"
          alt="Signup Illustration"
          width="100%"
        />
      </div>

      <div className="p-7 absolute top-90 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg w-130 h-auto">
        <div>
          <h1 className="text-2xl inter">Sign up</h1>
          <p>
            Already have an account?{" "}
            <span className="text-blue-600 relative left-2.5 font-bold">
              <Link href="/venderauth">Sign in</Link>
            </span>
          </p>
          {state?.error && <p className="text-red-600">{state.error}</p>}
        </div>

        <form
          className="mt-10"
          action={formAction}
          onSubmit={(e) => {

            const form = e.currentTarget;
            const formData = new FormData(form);
           

            console.log("Name:", formData.get("name"));
            console.log("Email:", formData.get("email"));
            console.log("Password:", formData.get("password"));
            console.log("Mobile:", formData.get("mobile"));

            formAction(formData);
          }}
        >
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
            <label htmlFor="mobile" className="text-gray-600">
              Mobile <sup>*</sup>
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter Mobile Number"
              className="shadow-lg p-3 border border-gray-300 w-full"
              required
            />
          </div>

          <div
            className="btn mt-5"
            style={{
              backgroundColor: "#DD2745",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button type="submit" className="text-white">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
