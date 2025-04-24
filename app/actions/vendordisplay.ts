'use server'
import  {PrismaClient}  from "@prisma/client";
const prisma = new PrismaClient();
console.log(prisma)
export  async function getVendorProducts() {
  try {
    const products = await prisma.vendorproduct.findMany({});
    console.log(products,"test")
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}








