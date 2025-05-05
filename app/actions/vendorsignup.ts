
'use server';

import { PrismaClient } from "../generated/prisma";

export default async function vendorsignup(prevState: any, formData: FormData) {
  const prisma = new PrismaClient();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const phone = formData.get('phone') as string;

  try {
    const existingVendor = await prisma.vendor.findFirst({
      where: { email },
    });

    if (existingVendor) {
      return { success: false, error: 'Vendor already exists' };
    }

    await prisma.vendor.create({
      data: {
        name,
        email,
        password,
        phone,
        status: 'pending',
      },
    });

    return { success: true, error: '' };
  } catch (error) {
    console.error('Error creating vendor registration:', error);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}
