import { z } from "zod";
import { createEnv } from  "@t3-oss/env-nextjs";

export const env = createEnv({
    server: {
        DATABASE_URL: z.string().min(1),
    },
    experimental__runtimeEnv: {},
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})

//Type safe environment variables
//zod: A TypeScript-first schema declaration and validation library. It allows you to define schemas for your data and validate that data against those schemas, providing type safety and runtime validation.
//createEnv: A function from the @t3-oss/env-nextjs package that creates a type-safe environment variable configuration for Next.js applications. It takes an object with server and experimental__runtimeEnv properties, where you can define your environment variables and their validation schemas.
//server: An object where you define your server-side environment variables and their validation schemas using zod.
//experimental__runtimeEnv: An object for defining experimental runtime environment variables, which can be used for features that are not yet stable or fully supported.
//skipValidation: A boolean flag that allows you to skip environment variable validation, which can be useful in certain development or testing scenarios.