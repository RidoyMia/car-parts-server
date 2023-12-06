"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ServicePayment_controller_1 = require("./ServicePayment.controller");
const ServicePaymentRouter = express_1.default.Router();
//@ts-ignore
ServicePaymentRouter.post('/create', ServicePayment_controller_1.PaymentController.createPaymentController);
ServicePaymentRouter.post('/update/:id', ServicePayment_controller_1.PaymentController.updatePaymentController);
ServicePaymentRouter.get('/:id', ServicePayment_controller_1.PaymentController.getPaymentData);
ServicePaymentRouter.get('/user/:email', ServicePayment_controller_1.PaymentController.getSingleUsersPaymentInfoServiceController);
ServicePaymentRouter.get('/all', ServicePayment_controller_1.PaymentController.getAllServicesPaymentController);
exports.default = ServicePaymentRouter;
