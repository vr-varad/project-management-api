import { NextFunction, Request, Response } from 'express'
import ProductService from '../service/Product.service'
import { StatusCodes } from 'http-status-codes'

const projectService = new ProductService()

const AddProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, price, description, category } = req.body
        const product = await projectService.AddProduct({
            name,
            price,
            description,
            category
        })
        return res.status(StatusCodes.CREATED).json({
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
        return res.status(StatusCodes.OK).json({
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
        const { productId } = req.params
        const product = await projectService.GetProductById(Number(productId))
        return res.status(StatusCodes.OK).json({
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
        const { productId } = req.params
        const { name, price, description, category } = req.body
        const product = await projectService.UpdateProduct(Number(productId), {
            name,
            price,
            description,
            category
        })
        return res.status(StatusCodes.OK).json({
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
        const { productId } = req.params
        const product = await projectService.DeleteProduct(Number(productId))
        return res.status(StatusCodes.OK).json({
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

