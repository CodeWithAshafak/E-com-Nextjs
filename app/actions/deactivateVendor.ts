
'use server';

import { PrismaClient } from "../generated/prisma";

export default async function vendorDeactivate(id:number) {
   const prisma = new PrismaClient();
  
   try{

    const updatedVendor = await prisma.vendor.update({
      where: { 
        id : (id)
       },
       data:{
        status:"pending"
       }
    });
  console.log('vendor status',updatedVendor);
   }catch(error){
    console.log(error);

   }finally{
    await prisma.$disconnect();

   }
}
