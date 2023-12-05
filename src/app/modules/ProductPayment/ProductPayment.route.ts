
import express from "express";
import { ProductPaymentController } from "./ProductPayment.Controller";
import { AuthGuard } from "../../../Utility/AuthGurd";
const ProductPaymentRouter = express.Router();

ProductPaymentRouter.post('/create', ProductPaymentController.createProductPayment)
ProductPaymentRouter.post('/update/:id', ProductPaymentController.productPaymentUpdate)
ProductPaymentRouter.get('/product/:id', ProductPaymentController.getProductPayment)
ProductPaymentRouter.get('/user/:email',AuthGuard, ProductPaymentController.getSingleUsersPaymentInfoController)
ProductPaymentRouter.get('/all', ProductPaymentController.getTotalProductPayment)
export default ProductPaymentRouter;