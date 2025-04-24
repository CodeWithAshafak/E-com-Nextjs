import { PrismaClient } from "../generated/prisma";
let prisma: PrismaClient;
export function getPrismaClient() {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
}
