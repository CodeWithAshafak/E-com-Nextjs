// import React from "react";
// import Image from "next/image";
// const Second: React.FC = () => {
//   return (
//     <>
   

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4 border border-black-500 ml-5">
//         <div className="flex flex-col items-center justify-center">
//           <div className="relative  w-25 sm:w-17 md:w-20  aspect-square">
//             <Image
//               src="/second/s1.jpg"
//               alt="first"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl">
//             Cake & Flower Combo
//           </span>
//         </div>

//         <div className="flex flex-col items-center justify-center">
//           <div className="relative  w-25 sm:w-25 md:w-25  aspect-square">
//             <Image
//               src="/second/s2.jpg"
//               alt="first"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl">
//           Easter
//           </span>
//         </div>

//         <div className="flex flex-col items-center justify-center">
//           <div className="relative  w-25 sm:w-25 md:w-25  aspect-square">
//             <Image
//               src="/second/s3.jpg"
//               alt="first"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl">
//           Akshaya Tritiya
//           </span>
//         </div>

//         <div className="flex flex-col items-center justify-center">
//           <div className="relative  w-25 sm:w-25 md:w-25  aspect-square">
//             <Image
//               src="/second/s4.jpg"
//               alt="first"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl">
//           Mother's day
//           </span>
//         </div>

//         <div className="flex flex-col items-center justify-center">
//           <div className="relative  w-25 sm:w-25 md:w-25  aspect-square">
//             <Image
//               src="/second/s5.jpg"
//               alt="first"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl">
//           Summer Flower
//           </span>
//         </div>

//         <div className="flex flex-col items-center justify-center">
//           <div className="relative  w-25 sm:w-25 md:w-25  aspect-square">
//             <Image
//               src="/second/s6.jpg"
//               alt="first"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl">
//           The Plant Store 
//           </span>
//         </div>

//         <div className="flex flex-col items-center justify-center">
//           <div className="relative  w-25 sm:w-25 md:w-25  aspect-square">
//             <Image
//               src="/second/s7.jpg"
//               alt="first"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl">
//           Trending Gifts
//           </span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Second;




import React from "react";
import Image from "next/image";

const Second: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 p-4 mx-4 border border-gray-300 rounded-md">

        <div className="flex flex-col items-center justify-center">
          <div className="relative w-20 sm:w-24 md:w-28 lg:w-32 aspect-square">
            <Image
              src="/second/s1.jpg"
              alt="Cake & Flower Combo"
              fill
              className="object-contain rounded-md shadow-sm"
            />
          </div>
          <span className="mt-2 text-sm sm:text-base font-medium text-gray-800">
            Cake & Flower Combo
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative w-20 sm:w-24 md:w-28 lg:w-32 aspect-square">
            <Image
              src="/second/s2.jpg"
              alt="Easter"
              fill
              className="object-contain rounded-md shadow-sm"
            />
          </div>
          <span className="mt-2 text-sm sm:text-base font-medium text-gray-800">
            Easter
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative w-20 sm:w-24 md:w-28 lg:w-32 aspect-square">
            <Image
              src="/second/s3.jpg"
              alt="Akshaya Tritiya"
              fill
              className="object-contain rounded-md shadow-sm"
            />
          </div>
          <span className="mt-2 text-sm sm:text-base font-medium text-gray-800">
            Akshaya Tritiya
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative w-20 sm:w-24 md:w-28 lg:w-32 aspect-square">
            <Image
              src="/second/s4.jpg"
              alt="Mother's Day"
              fill
              className="object-contain rounded-md shadow-sm"
            />
          </div>
          <span className="mt-2 text-sm sm:text-base font-medium text-gray-800">
            Mother's Day
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative w-20 sm:w-24 md:w-28 lg:w-32 aspect-square">
            <Image
              src="/second/s5.jpg"
              alt="Summer Flower"
              fill
              className="object-contain rounded-md shadow-sm"
            />
          </div>
          <span className="mt-2 text-sm sm:text-base font-medium text-gray-800">
            Summer Flower
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative w-20 sm:w-24 md:w-28 lg:w-32 aspect-square">
            <Image
              src="/second/s6.jpg"
              alt="The Plant Store"
              fill
              className="object-contain rounded-md shadow-sm"
            />
          </div>
          <span className="mt-2 text-sm sm:text-base font-medium text-gray-800">
            The Plant Store
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative w-20 sm:w-24 md:w-28 lg:w-32 aspect-square">
            <Image
              src="/second/s7.jpg"
              alt="Trending Gifts"
              fill
              
              className="object-contain rounded-md shadow-sm"
            />
          </div>
          <span className="mt-2 text-sm sm:text-base font-medium text-gray-800">
            Trending Gifts
          </span>
        </div>

      </div>
    </>
  );
};

export default Second;
