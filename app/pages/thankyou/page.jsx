'use client'

import Image from 'next/image'
import Footer from '../../Componets/Footer'
import Header from '../../Componets/Header'
import React from 'react'
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter()
  return (
    <>
    <Header/>

   <div className='mt-26 mb-5 flex justify-between items-center flex-col ' >

    <Image src="/thankyou/thankyou.gif" alt="thankyou" width={400} height={400} className='mb-6'/>
     
     <button onClick={() => router.push('/')} className=" mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Back To Home
     </button>

    </div>
   

    <Footer/>
    </>
  )
}

export default page