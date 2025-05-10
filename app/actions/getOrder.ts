'use server';
import { PrismaClient } from "../generated/prisma";
// or use this if not using generated prisma: import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getOrder() {
  try {
    const orders = await prisma.order.findMany(); 
    return orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Could not fetch orders");
  }
}
