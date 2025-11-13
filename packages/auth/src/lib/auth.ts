import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prismaClient as prisma } from "@repo/db/schema";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true
    },

    //  todo: add more auth providers
    // socialProviders: { 
    // github: { 
    //   clientId: process.env.GITHUB_CLIENT_ID as string, 
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
    // }, 

});