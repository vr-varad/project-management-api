import { CreateProductInputs, UpdateProductInputs } from '../dto/Products'
import Product from '../models/Product.model'
import { DataBaseError, NotFoundError } from '../utils/errorHandler'
import Logger from '../utils/logger'

class ProductService {
    async AddProduct(ProductData: CreateProductInputs) {
        try {
            const { name, price, description, category } = ProductData
            const product = await Product.create({
                name,
                price,
                description,
                category
            })
            return product
        } catch (error) {
            Logger.error(`Service Layer Error: Error Adding Product`)
            throw new DataBaseError((error as Error).message)
        }
    }
    async GetAllProducts() {
        try {
            const products = await Product.findAll()
            return products
        } catch (error) {
            Logger.error(`Service Layer Error: Error Getting All Product`)
            throw new DataBaseError((error as Error).message)
        }
    }
    async GetProductById(ProductId: number) {
        try {
            const product = await Product.findByPk(ProductId)
            return product
        } catch (error) {
            Logger.error(
                `Service Layer Error: Error Getting Product By Id ${ProductId}`
            )
            throw new DataBaseError((error as Error).message)
        }
    }
    async UpdateProduct(
        ProductId: number,
        ProductData: Partial<UpdateProductInputs>
    ) {
        try {
            const product = await Product.findByPk(ProductId)
            if (!product) {
                throw new NotFoundError('Product Not Found')
            }
            const updatedProduct = await product.update(
                {
                    ProductData
                },
                {
                    where: {
                        id: ProductId
                    }
                }
            )
            return updatedProduct
        } catch (error) {
            Logger.error(
                `Service Layer Error: Error Updating Product By Id ${ProductId}`
            )
            throw new DataBaseError((error as Error).message)
        }
    }
    async DeleteProduct(ProductId: number) {
        try {
            const product = await Product.findByPk(ProductId)
            if (!product) {
                throw new NotFoundError('Product Not Found')
            }
            await Product.destroy({
                where: {
                    id: ProductId
                }
            })
        } catch (error) {
            Logger.error(
                `Service Layer Error: Error Deleting Product By Id ${ProductId}`
            )
            throw new DataBaseError((error as Error).message)
        }
    }
}

export default ProductService

