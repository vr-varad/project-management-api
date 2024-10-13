import { CreateProductInputs, UpdateProductInputs } from '../validators/Product.validator'
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
    async GetAllProducts(page: number = 1, pageSize: number = 10) {
        try {
            const products = await Product.findAll({
                limit: pageSize,
                offset: (page - 1) * pageSize
            })
            return products
        } catch (error) {
            Logger.error(`Service Layer Error: Error Getting All Product`)
            throw new DataBaseError((error as Error).message)
        }
    }
    async GetProductById(ProductId: number) {
        try {
            const product = await Product.findByPk(ProductId)
            if (!product) {
                throw new NotFoundError('Product Not Found')
            }
            return product
        } catch (error) {
            Logger.error(
                `Service Layer Error: Error Getting Product By Id ${ProductId}`
            )
            throw new DataBaseError((error as Error).message)
        }
    }

    async GetProductByName(ProductName: string) {
        try {
            const products = await Product.findAll({
                where: {
                    name: ProductName
                }
            })
            return products
        } catch (error) {
            Logger.error(
                `Service Layer Error: Error Getting Product With Name ${ProductName}`
            )
            throw new DataBaseError((error as Error).message)
        }
    }

    async GetProductByCategory(ProductCategory: string) {
        try {
            const products = await Product.findAll({
                where: {
                    category: ProductCategory
                }
            })
            return products
        } catch (error) {
            Logger.error(
                `Service Layer Error: Error Getting Product With Category ${ProductCategory}`
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

            await Product.update(
                {
                    ...ProductData
                },
                {
                    where: {
                        id: ProductId
                    }
                }
            )
            const updatedProduct = await Product.findByPk(ProductId)
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

