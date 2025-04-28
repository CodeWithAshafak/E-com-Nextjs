'use server';

import { PrismaClient } from "../generated/prisma";
export async function vendorlogin(prevState: any, formData: FormData) {
    const prisma = new PrismaClient();
    console.log(formData);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
        const vendor = await prisma.vendoruser.findFirst({
            where: {
                email,
                password
            }
        });
        if (vendor) {
            console.log(vendor)
            return { success: true, vendor };
        } else {
            return { error: 'Invalid email or password' };
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return { error: 'Failed to log in' };
    }
}

