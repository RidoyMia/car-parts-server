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
exports.ProductPaymentController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../../../config");
// const SSLCommerzPayment = require('sslcommerz-lts')
//@ts-ignore
const sslcommerz_lts_1 = __importDefault(require("sslcommerz-lts"));
const mongodb_1 = require("mongodb");
const product_model_1 = require("../product/product.model");
const ProductPayment_model_1 = require("./ProductPayment.model");
const ProductPayment_services_1 = require("./ProductPayment.services");
const createProductPayment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const session = mongoose_1.default.startSession();
    try {
        (yield session).startTransaction();
        const productInfo = req.body;
        //@ts-ignore
        const gettingProdut = yield product_model_1.productModel.find({ _id: productInfo.id });
        const newId = new mongodb_1.ObjectId().toString();
        const data = {
            total_amount: gettingProdut[0].price,
            currency: 'USD',
            tran_id: newId,
            success_url: `http://localhost:7000/api/v1/productPayment/update/${newId}`,
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
            const orderInfo = Object.assign(Object.assign({}, productInfo), { transaction: newId, paid: false });
            const insertOrder = yield ProductPayment_model_1.ProductPaymentModel.create(Object.assign({}, orderInfo));
            res.status(200).send({
                url: GatewayPageURL
            });
        }));
        (yield session).commitTransaction();
    }
    catch (error) {
        (yield session).abortTransaction();
        (yield session).endSession();
        res.status(400).send({
            message: error
        });
    }
});
const productPaymentUpdate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield ProductPayment_model_1.ProductPaymentModel.updateOne({ transaction: id }, { $set: {
                paid: true
            } });
        res.redirect(`http://localhost:5173/productDetails/${id}`);
    }
    catch (error) {
        res.status(400).send({
            message: 'something went wrong'
        });
    }
});
const getProductPayment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield ProductPayment_model_1.ProductPaymentModel.find({ transaction: id }).populate('id');
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
const getSingleUsersPaymentInfoController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const result = yield ProductPayment_services_1.ServicePaymentServices.getSingleUsersPaymentInfo(email);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        res.status(200).send({
            message: 'something went wrong'
        });
    }
});
const getTotalProductPayment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const page = parseInt(req.query.page);
        console.log();
        const result = yield ProductPayment_services_1.ServicePaymentServices.totalProducPayment(page);
        console.log(result);
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
exports.ProductPaymentController = {
    createProductPayment, productPaymentUpdate, getProductPayment, getSingleUsersPaymentInfoController, getTotalProductPayment
};
