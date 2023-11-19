import express from "express"
import { ProductController } from "./product.controller"

const ProductRouter = express.Router()

ProductRouter.post('/create',ProductController.createProduct)
ProductRouter.get('/all',ProductController.getAllProduct)
ProductRouter.get('/:id',ProductController.getSingleProductController)

export default ProductRouter;