'use server'

import { PrismaClient } from "../generated/prisma";
export default async function deleteVendorPro(vendorId: number) {
  const prisma = new PrismaClient();

  try {
    const deletedVendorPro = await prisma.vendorproduct.delete({
      where: { id: vendorId },
    });
    return { success: true, deletedVendorPro };
  } catch (error) {
    console.error('Error deleting vendor product:', error);
    return { error: 'Failed to delete vendor product' };
  } finally {
    await prisma.$disconnect();
  }
}


