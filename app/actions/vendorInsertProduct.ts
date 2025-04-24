'use server';
import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export async function vendorInsertProduct(prevState: any, formData: FormData) {
  const proname = formData.get('proname') as string;
  const prodetails = formData.get('prodetails') as string;
  const categroy = formData.get('categroy') as string;
  const image = formData.get('image') as File;
  const price = formData.get('price') as string;
  const warranty = formData.get('warranty') as string;

  if (!proname || !prodetails || !categroy || !price || !warranty || !image) {
    return { success: false, error: 'All fields are required' };
  }

  try {
   
    const uploadFormData = new FormData();
    uploadFormData.append("file", image);
    uploadFormData.append("upload_preset", "ashafakpreset");

    const cloudinaryResponse = await fetch("https://api.cloudinary.com/v1_1/dovyg2mt3/image/upload", {
      method: "POST",
      body: uploadFormData
    });
     console.log("cloudinaryResponse :- ", cloudinaryResponse);
     
    const cloudinaryData = await cloudinaryResponse.json();

    if (!cloudinaryData.secure_url) {
      return { success: false, error: 'Image upload failed' };
    }


    const vendorproduct = await prisma.vendorproduct.create({
      data: {
        proname,
        prodetails,
        categroy,
        image: cloudinaryData.secure_url,
        price: parseInt(price),
        warranty,
      },
    });

    console.log('Product saved:', vendorproduct);

    return { success: true, error: '' };
  } catch (error: any) {
    console.error('Server error:', error.message);
    return { success: false, error: 'Something went wrong!' };
  }
}
