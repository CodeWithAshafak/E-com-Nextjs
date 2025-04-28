'use server';

import { PrismaClient } from "../generated/prisma";


export async function vendorsignup(prevState: any, formData: FormData) {
    const prisma = new PrismaClient();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const mobile = formData.get('mobile') as string;
    console.log(name, email, password, mobile)  
    
    const existingVendor = await prisma.vendoruser.findFirst({
        where: { email }
    });
    if (existingVendor) {
        return { error: 'Vendor already exists' };
    }
    try {
        const product = await prisma.vendoruser.create({
            data: {
                name, email , password , mobile }
        });
        return { success: true };
    } catch (error) {
        console.error('Error creating product:', error);
        return { error: 'Failed to create product' };
    }
}
