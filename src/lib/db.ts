import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env";

const adapter = new PrismaPg({
    connectionString: env.DATABASE_URL,
})

// Prevents connection pool exhaustion in development by Next.js hot reloading.
const globalForPrisma = global as unknown as {
    prisma: PrismaClient
};

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter})

if (process.env.NODE_ENV !== "production") 
    globalForPrisma.prisma = prisma;

export { prisma }

// Creating instance of Prisma Client with PostgreSQL adapter, using connection string from environment variable.
// Ensuring that only one instance of Prisma Client is created during development to prevent issues with hot reloading.
// HOT RELOADING: In development, Next.js may reload modules multiple times, which can lead to multiple instances of Prisma Client being created.
// By attaching the Prisma Client instance to the global object, we can ensure that the same instance is reused across reloads, preventing issues with too many connections to the database.
// DB Client: The Prisma Client is an auto-generated query builder that provides a type-safe API for interacting with the database. It allows you to perform CRUD operations and complex queries in a more intuitive way compared to raw SQL queries.
// Adapter: The PrismaPg adapter is used to connect the Prisma Client to a PostgreSQL database. It handles the connection and communication between the Prisma Client and the PostgreSQL database, allowing you to execute queries and manage your data effectively.
// Global Object: In Node.js, the global object is a special object that is available in all modules. By attaching the Prisma Client instance to the global object, we can ensure that it is accessible across different modules and that only one instance is created during development.