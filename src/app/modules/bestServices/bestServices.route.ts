import express from "express"
import { BestServicesController } from "./bestServices.controller"
const bestServiceRouter = express.Router()

bestServiceRouter.post('/create',BestServicesController.createServicesController)
bestServiceRouter.get('/all',BestServicesController.getAllService)
bestServiceRouter.get('/:id',BestServicesController.getSingleService)

export default bestServiceRouter;