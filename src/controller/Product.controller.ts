import { NextFunction, Request, Response } from 'express'
import ProductService from '../service/Product.service'
import { StatusCodes } from 'http-status-codes'
import { CreateProductInputs, UpdateProductInputs } from '../dto/Products'
import { CreateProductSchema, UpdateProductSchema } from '../validators/Product.validator'

const projectService = new ProductService()

const AddProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ProductData = CreateProductSchema.parse(req.body)
        const { name, price, description, category } =
            ProductData as CreateProductInputs
        const product = await projectService.AddProduct({
            name,
            price,
            description,
            category
        })
        res.status(StatusCodes.CREATED).json({
            success: true,
            product
        })
    } catch (error) {
        next(error)
    }
}
const GetAllProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const pageParam = req.query.page
        const pageSizeParam = req.query.pageSize
        const page = typeof pageParam === 'string' ? parseInt(pageParam) : 1
        const pageSize =
            typeof pageSizeParam === 'string' ? parseInt(pageSizeParam) : 10
        const products = await projectService.GetAllProducts(page, pageSize)
        res.status(StatusCodes.OK).json({
            success: true,
            products
        })
    } catch (error) {
        next(error)
    }
}
const GetProductById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id: productId } = req.params
        const product = await projectService.GetProductById(Number(productId))
        res.status(StatusCodes.OK).json({
            success: true,
            product
        })
    } catch (error) {
        next(error)
    }
}
const UpdateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id: productId } = req.params
        const ProductData = UpdateProductSchema.parse(req.body)
        const { name, price, description, category } =
            ProductData as UpdateProductInputs
        const product = await projectService.UpdateProduct(Number(productId), {
            name,
            price,
            description,
            category
        })
        res.status(StatusCodes.OK).json({
            success: true,
            product
        })
    } catch (error) {
        next(error)
    }
}
const DeleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id: productId } = req.params
        const product = await projectService.DeleteProduct(Number(productId))
        res.status(StatusCodes.OK).json({
            success: true,
            product
        })
    } catch (error) {
        next(error)
    }
}

export {
    AddProduct,
    GetAllProducts,
    GetProductById,
    UpdateProduct,
    DeleteProduct
}

