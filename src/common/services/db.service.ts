import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Establishes a connection to the database.
 * If the connection fails, logs an error and exits the process with a status code of 1.
 * @returns {Promise<void>}
 */
async function connectDB() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); 
  }
}

connectDB();

export default prisma;
