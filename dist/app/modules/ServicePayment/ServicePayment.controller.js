"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//@ts-ignore
const sslcommerz_lts_1 = __importDefault(require("sslcommerz-lts"));
const services_model_1 = require("../services/services.model");
const config_1 = require("../../../config");
const mongodb_1 = require("mongodb");
const ServicePayment_model_1 = require("./ServicePayment.model");
const ServicePayment_service_1 = require("./ServicePayment.service");
const createPaymentController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession(); // Added await
    try {
        yield session.startTransaction(); // Added await
        const paymentInfo = req.body;
        const getService = yield services_model_1.ServiceModel.find({ _id: paymentInfo.productId }).session(session);
        const newId = new mongodb_1.ObjectId().toString();
        const data = {
            //@ts-ignore
            total_amount: paymentInfo.price,
            currency: 'USD',
            tran_id: newId,
            // use unique tran_id for each api call
            success_url: `http://localhost:7000/api/v1/servicePayment/update/${newId}`,
            fail_url: 'http://localhost:3030/fail',
            cancel_url: 'http://localhost:3030/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: 'Computer.',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: 'Customer Name',
            cus_email: 'customer@example.com',
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '01711111111',
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };
        const sslcz = new sslcommerz_lts_1.default(config_1.config.storeId, config_1.config.storepassword, false);
        //@ts-ignore
        sslcz.init(data).then((apiResponse) => __awaiter(void 0, void 0, void 0, function* () {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL;
            const orderData = Object.assign(Object.assign({}, paymentInfo), { transaction: data === null || data === void 0 ? void 0 : data.tran_id, paid: false });
            //   console.log(orderData,'orderdata');
            const insertOrder = yield (yield ServicePayment_model_1.ServicePaymentModel.create(Object.assign({}, orderData))).$session(session);
            res.status(200).send({ url: GatewayPageURL });
        }));
        yield session.commitTransaction(); // Added await
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        res.status(400).send({
            message: error
        });
    }
});
const updatePaymentController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tran_id = req.params.id;
        const result = yield ServicePayment_model_1.ServicePaymentModel.updateOne({ transaction: tran_id }, { $set: {
                paid: true
            } });
        res.redirect(`http://localhost:5173/success/${tran_id}`);
    }
    catch (error) {
        res.status(400).send({
            message: 'something went wrong'
        });
    }
});
const getPaymentData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield ServicePayment_model_1.ServicePaymentModel.findOne({ transaction: id }).populate('productId');
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        res.status(400).send({
            message: 'Something went wrong'
        });
    }
});
const getSingleUsersPaymentInfoServiceController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const result = yield ServicePayment_service_1.ServicePaymentServices.getSingleUsersPaymentInfoService(email);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        res.status(400).send({
            message: 'something went wrong'
        });
    }
});
exports.PaymentController = {
    createPaymentController, updatePaymentController, getPaymentData, getSingleUsersPaymentInfoServiceController
};
