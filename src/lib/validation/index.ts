import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    username: z.string().min(3, { message: 'Username must be at least 3 characters' }).max(15, { message: 'Username must be at most 15 characters' }),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' })
  })
  