import express, { Router } from 'express'
import {
    AddProduct,
    DeleteProduct,
    GetAllProducts,
    GetProductByCategory,
    GetProductById,
    GetProductByName,
    UpdateProduct
} from '../controller/Product.controller'

const router: Router = express.Router()

router.post('/products', AddProduct)
router.get('/products', GetAllProducts)
router.get('/products/name/:name', GetProductByName)
router.get('/products/category/:category', GetProductByCategory)
router.get('/products/:id', GetProductById)
router.put('/products/:id', UpdateProduct)
router.delete('/products/:id', DeleteProduct)

export { router as UserRouter }
