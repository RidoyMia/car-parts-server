"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductPayment_Controller_1 = require("./ProductPayment.Controller");
const AuthGurd_1 = require("../../../Utility/AuthGurd");
const ProductPaymentRouter = express_1.default.Router();
ProductPaymentRouter.post('/create', ProductPayment_Controller_1.ProductPaymentController.createProductPayment);
ProductPaymentRouter.post('/update/:id', ProductPayment_Controller_1.ProductPaymentController.productPaymentUpdate);
ProductPaymentRouter.get('/product/:id', ProductPayment_Controller_1.ProductPaymentController.getProductPayment);
ProductPaymentRouter.get('/user/:email', AuthGurd_1.AuthGuard, ProductPayment_Controller_1.ProductPaymentController.getSingleUsersPaymentInfoController);
exports.default = ProductPaymentRouter;
