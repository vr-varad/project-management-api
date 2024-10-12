import { NextFunction, Request, Response } from 'express'
import ProductService from '../service/Product.service'
import { StatusCodes } from 'http-status-codes'
import { CreateProductInputs, UpdateProductInputs } from '../dto/Products'

const projectService = new ProductService()

const AddProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, price, description, category } =
            req.body as CreateProductInputs
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
        const products = await projectService.GetAllProducts()
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
        const { name, price, description, category } =
            req.body as UpdateProductInputs
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

