
'use server';

import { PrismaClient } from "../generated/prisma";

export default async function vendorActivate(id:number) {
   const prisma = new PrismaClient();
  
   try{

    const updatedVendor = await prisma.vendor.update({
      where: { 
        id : (id)
       },
       data:{
        status:"active"
       }
    });
  console.log('vendor status',updatedVendor);
   }catch(error){
    console.log(error);

   }finally{
    await prisma.$disconnect();

   }
}
