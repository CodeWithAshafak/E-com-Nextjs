'use server'

import { PrismaClient } from "../generated/prisma";
export default async function deleteVendorAction(vendorId: number) {
  const prisma = new PrismaClient();
 
  try {
    const deletedVendor = await prisma.vendor.delete({
      where: { id: vendorId },
    });
    return { success: true, deletedVendor };
  } catch (error) {
    console.error('Error deleting vendor:', error);
    return { error: 'Failed to delete vendor' };
  } finally {
    await prisma.$disconnect();
  }
}


