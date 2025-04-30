
'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {

  const router=useRouter()
  useEffect(()=>{
     let name=localStorage.getItem('vendor')

     if(!name){
        router.push('/auth/vendorauth/login')
     } else{
       router.push('/vendordashboard')
     }
  }, [])




  return (
    <div >
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro error labore quod repellendus neque fuga maxime nostrum quibusdam a ab perferendis ea, voluptate odit culpa! Minus ex reiciendis illum 
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus voluptas error quidem molestiae accusantium nesciunt excepturi sit dignissimos facilis repellat omnis iusto adipisci, architecto ullam repellendus laboriosam numquam pariatur laborum.
    </p>lo

    </div>
  )
}

export default page