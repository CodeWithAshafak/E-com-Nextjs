'use server'
import { PrismaClient } from "../generated/prisma";
export  async function vendorList() {
    
    try {
        const prisma = new PrismaClient()
        const vendors = await prisma.vendor.findMany()
        return vendors
    } catch (error) {
        console.error("Error fetching products:", error);
    return [];
    }
}

