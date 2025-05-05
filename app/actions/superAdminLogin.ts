'use server';

import { PrismaClient } from "../generated/prisma";
export default  async function superAdminLogin(prevState: any, formData: FormData) {
    const prisma = new PrismaClient();
    console.log('formdata in login',formData);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
        const superAdmin = await prisma.superadmin.findFirst({
            where: {
                email,
                password
            }
        });
        if (superAdmin) {
            console.log(superAdmin)
            return { success: true, superAdmin };
        } else {
            return { error: 'Invalid email or password' };
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return { error: 'Failed to log in' };
    }
}

