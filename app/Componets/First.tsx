'use client';
import React from 'react';
import Image from 'next/image';

import { useRouter } from "next/navigation";
const First : React.FC= () => {
  const router = useRouter()
  return (
    <div className="mt-27 mb-8 mx-5 border border-red-500 rounded-md p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
     
        <div className="flex flex-col items-center justify-center relative cursor-pointer"
          onClick={() => router.push("/pages/sameday")} >
          <div className="relative w-10 sm:w-10 md:w-10 aspect-square">
            <Image src="/first/f1.jpg" alt="first" fill className="object-contain" />
          </div>
          <span className="mt-2 text-sm sm:text-base">Same Day Delivery</span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-16 border-r border-red-500" />
        </div>

    
        <div className="flex flex-col items-center justify-center relative">
          <div className="relative w-10 sm:w-10 md:w-10 aspect-square">
            <Image src="/first/f2.jpg" alt="first" fill className="object-contain" />
          </div>
          <span className="mt-2 text-sm sm:text-base">Flower</span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-16 border-r border-red-500" />
        </div>

        <div className="flex flex-col items-center justify-center relative">
          <div className="relative  w-10 sm:w-10 md:w-10 aspect-square">
            <Image src="/first/f3.jpg" alt="first" fill className="object-contain" />
          </div>
          <span className="mt-2 text-sm sm:text-base">Cakes</span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-16 border-r border-red-500" />
        </div>

   
        <div className="flex flex-col items-center justify-center relative">
          <div className="relative  w-10 sm:w-10 md:w-10 aspect-square">
            <Image src="/first/f4.jpg" alt="first" fill className="object-contain" />
          </div>
          <span className="mt-2 text-sm sm:text-base">Personalized</span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-16 border-r border-red-500" />
        </div>

        <div className="flex flex-col items-center justify-center relative">
          <div className="relative  w-10 sm:w-10 md:w-10  aspect-square">
            <Image src="/first/new.jpg" alt="first" fill className="object-contain" />
          </div>
          <span className="mt-2 text-sm sm:text-base">New Arrivals</span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-16 border-r border-red-500" />
        </div>

      
        <div className="flex flex-col items-center justify-center relative">
          <div className="relative  w-10 sm:w-10 md:w-10 aspect-square">
            <Image src="/first/f8.jpg" alt="first" fill className="object-contain" />
          </div>
          <span className="mt-2 text-sm sm:text-base">New Arrivals</span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-16 border-r border-red-500" />
        </div>

        <div className="flex flex-col items-center justify-center relative">
          <div className="relative  w-10 sm:w-10 md:w-10  aspect-square">
            <Image src="/first/f6.jpg" alt="first" fill className="object-contain" />
          </div>
          <span className="mt-2 text-sm sm:text-base">Plants</span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-20
          border-r border-red-500" />
        </div>

     
        <div className="flex flex-col items-center justify-center">
          <div className="relative  w-10 sm:w-10 md:w-10  aspect-square">
            <Image src="/first/f7.jpg" alt="first" fill className="object-contain" />
          </div>
          <span className="mt-2 text-sm sm:text-base">International</span>
        </div>
      </div>
    </div>
  );
};

export default First;
