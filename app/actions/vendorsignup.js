// 'use server';

//  import { PrismaClient } from "../generated/prisma";

// export async function vendorsignup(prevState: any, formData: FormData) {
//     const prisma = new PrismaClient();
//     const name = formData.get('name') as string;
//     const email = formData.get('email') as string;
//     const password = formData.get('password') as string;
//     const phone = formData.get('phone') as string;
//     console.log(name, email, password, phone)  
    
//     const existingVendor = await prisma.vendor.findFirst({
//         where: { email }
//     });
//     if (existingVendor) {
//         return { error: 'Vendor already exists' };
//     }
//     try {
//         const vendor = await prisma.vendor.create({
//             data: { status: "pending", name, email, password, phone }
//         });
//         return { success: true, error: "", loading: false };
//     } catch (error) {
//         console.error('Error create signup page:', error);
//         return { error: 'Failed to create signup' };
//     }
// }


'use server'

import { PrismaClient } from "../generated/prisma";

const prisma= new PrismaClient()

export default async function vendorsignup(prevState,formData){
  const prisma = new PrismaClient();
    const name = formData.get('name') 
    const email = formData.get('email') 
    const password = formData.get('password') 
    const phone = formData.get('phone') 
    console.log(name,email,password,phone)  

try {
    const vendorInfo=await prisma.vendor.create({
        data:{name,email,password,phone,status: "pending",}
    })
    return { success: true };
} catch (error) {
    console.error('Error creating product:', error);
        return { error: 'Failed to create product' };
}
    
}