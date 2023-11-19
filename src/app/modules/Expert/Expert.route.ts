import express from "express"
import { ExpertController } from "./Expert.controller"
const ExpertRouter = express.Router()

ExpertRouter.post('/create',ExpertController.createExpert)
ExpertRouter.get('/all',ExpertController.getAllexpert)
ExpertRouter.get('/:id',ExpertController.getSingleExpert);

export default ExpertRouter;