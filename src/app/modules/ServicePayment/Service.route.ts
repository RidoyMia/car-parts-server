import express from "express"
import { PaymentController } from "./ServicePayment.controller";


const ServicePaymentRouter = express.Router();
//@ts-ignore
ServicePaymentRouter.post('/create',PaymentController.createPaymentController);
ServicePaymentRouter.post('/update/:id',PaymentController.updatePaymentController);
ServicePaymentRouter.get('/:id',PaymentController.getPaymentData);

export default ServicePaymentRouter;
