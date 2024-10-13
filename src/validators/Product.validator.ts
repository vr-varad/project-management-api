import { z } from 'zod'

export const CreateProductSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    price: z.number().positive('Price must be a positive number'),
    description: z.string().optional(),
    category: z.string().min(1, 'Category is required')
})

export const UpdateProductSchema = z.object({
    name: z.string().min(1, 'Name is required').optional(),
    price: z.number().positive('Price must be a positive number').optional(),
    description: z.string().optional(),
    category: z.string().min(1, 'Category is required').optional()
})


export type CreateProductInputs = z.infer<typeof CreateProductSchema>

