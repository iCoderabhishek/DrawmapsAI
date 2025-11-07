import * as z from "zod"

export const SignUpSchema = z.object({
    username: z.string().min(4, "Your password should have atleast 4 chars").trim(),
    email: z.string().trim().toLowerCase().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email"),
    password: z.string().trim().min(6, "Password should contain atleast 8 characters").max(100)
})

export const LoginSchema = z.object({
    email: z.string().trim().toLowerCase().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email"),
    password: z.string().trim().min(6, "Password should contain atleast 8 characters").max(100)
})

export const UserPrompt = z.object({
  prompt: z.string().trim()
    .min(4, "Prompt must be at least 4 characters long")
    .max(1000, "Prompt too long")
});
