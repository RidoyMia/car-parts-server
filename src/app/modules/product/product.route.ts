import express from "express"
import { ProductController } from "./product.controller"

const ProductRouter = express.Router()

ProductRouter.post('/create',ProductController.createProductContoller)
ProductRouter.get('/all',ProductController.getAllProduct)
ProductRouter.get('/:id',ProductController.getSingleProductController)
ProductRouter.delete('/:id',ProductController.deletedSingleProductController)
ProductRouter.patch('/:id',ProductController.updateSingleProductController)

export default ProductRouter;