import Footer from '../../Componets/Footer'
import Header from '../../Componets/Header'
import React from 'react'
// import { useRouter } from 'next/navigation'
const page = () => {
  return (
    <>
    <Header/>

   <div className='mt-5 mb-5 flex justify-center ' >
    <img src="/thankyou/thankyou.gif" alt="thankyou" />

    </div>
   

    <Footer/>
    </>
  )
}

export default page