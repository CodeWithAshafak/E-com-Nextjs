import { PrismaClient } from "../generated/prisma";
let prisma: PrismaClient;
export default function getPrismaClient() {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
}
