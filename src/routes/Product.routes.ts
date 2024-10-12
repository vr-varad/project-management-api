import express, { Router } from 'express'
import {
    AddProduct,
    DeleteProduct,
    GetAllProducts,
    GetProductById,
    UpdateProduct
} from '../controller/Product.controller'

const router: Router = express.Router()

router.post('/products', AddProduct)
router.get('/products', GetAllProducts)
router.get('/products/:id', GetProductById)
router.put('/products/:id', UpdateProduct)
router.delete('/products/:id', DeleteProduct)

export { router as UserRouter }
