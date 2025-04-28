
"use server"; 
import { PrismaClient } from "../generated/prisma";

export async function cartdisplay() {
  try {
    const prisma = new PrismaClient(); 
    const products = await prisma.vendorproduct.findMany();
    return products; 
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
