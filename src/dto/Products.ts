export interface CreateProductInputs {
    name: string
    price: number
    description?: string
    category: string
}

export interface UpdateProductInputs {
    name?: string
    price?: number
    description?: string
    category?: string
}

