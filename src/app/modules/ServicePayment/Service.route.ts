import express from "express"
import { PaymentController } from "./ServicePayment.controller";


const ServicePaymentRouter = express.Router();
//@ts-ignore
ServicePaymentRouter.post('/create',PaymentController.createPaymentController);
ServicePaymentRouter.post('/update/:id',PaymentController.updatePaymentController);

ServicePaymentRouter.get('/user/:email',PaymentController.getSingleUsersPaymentInfoServiceController);
ServicePaymentRouter.get('/all',PaymentController.getAllServicesPaymentController);
ServicePaymentRouter.get('/:id',PaymentController.getPaymentData);

export default ServicePaymentRouter;
