import express from "express"
import { ServicesController } from "./services.controller"


const ServicesRouter = express.Router()

ServicesRouter.post('/create',ServicesController.createProduct)
ServicesRouter.get('/all',ServicesController.getAllProduct)
ServicesRouter.get('/:id',ServicesController.getSingleProductController)

export default ServicesRouter;