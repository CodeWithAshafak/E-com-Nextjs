'use server'

import { PrismaClient } from "../generated/prisma";
export default async function adminReg(prevState: any, formData: FormData) {
    
    const prisma = new PrismaClient();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const phone = formData.get('phone') as string;
    console.log(name,email,password,phone)  
try {
    const adminlogdata=await prisma.admin.create({
        data:{name,email,password,phone}
    })
    return { success: true };
} catch (error) {
    console.error('Error at login action:', error);
        return { error: 'Failed to admin login' };
}

}



