import * as  z from 'zod'
import { ZodSchema } from 'zod'

export const ContactSchema = z.object({
    name: z.string()
        .min(2, { message: "Name must be at least 2 characters" }),
    email: z.string()
        .email("Invalide email adress"),
    message: z.string()
        .min(2, { message: "Message must be at least 2 characters" })
})

export function validateWithZodSchema(schema, data) {
    const result = schema.safeParse(data)
    if (!result.success) {
        const errors = result.error.errors.map((error) => error.message)
        throw new Error(errors.join(','))
    }
    return result.data
}
