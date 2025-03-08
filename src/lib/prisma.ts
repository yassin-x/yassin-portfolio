import { Environments } from "@/constants/enums";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env._NODE_DEV === Environments.DEV
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== Environments.PROD) globalForPrisma.prisma = db;
