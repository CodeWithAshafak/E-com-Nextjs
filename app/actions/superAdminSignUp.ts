

'use server';

import { PrismaClient } from "../generated/prisma";

export default async function superAdminSignUp(prevState: any, formData: FormData) {
  const prisma = new PrismaClient();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const phone = formData.get('phone') as string;

  try {
    const existingSuperAdmin = await prisma.superadmin.findFirst({
      where: { email },
    });

    if (existingSuperAdmin ) {
      return { success: false, error: 'SuperAdmin already exists' };
    }

    await prisma.superadmin.create({
      data: {
        name,
        email,
        password,
        phone
      },
    });

    return { success: true, error: '' };
  } catch (error) {
    console.error('Error creating superadin registration:', error);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}
