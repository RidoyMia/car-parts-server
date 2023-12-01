
import express from "express";
import { ProductPaymentController } from "./ProductPayment.Controller";
const ProductPaymentRouter = express.Router();

ProductPaymentRouter.post('/create', ProductPaymentController.createProductPayment)
ProductPaymentRouter.post('/update/:id', ProductPaymentController.productPaymentUpdate)
export default ProductPaymentRouter;