'use server'
import { PrismaClient } from "../generated/prisma";
export default async function adminLog(prevState: any, formData: FormData){
    const prisma= new PrismaClient()
    const email= formData.get('email') as string
    const password=formData.get('password') as string

    try {
        const admin = await prisma.admin.findFirst({
            where: {
                email,
                password
            }
        });
        console.log(admin)
        if (admin) {
            return { success: true, admin };
         
        } else {
            return { error: 'Invalid email or password' };
        }
    
    } catch (error) {
        console.error('Error logging in:', error);
        return { error: 'Failed to log in' };
    }
}