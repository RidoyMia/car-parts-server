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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicePaymentServices = void 0;
const ProductPayment_model_1 = require("./ProductPayment.model");
const getSingleUsersPaymentInfo = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ProductPayment_model_1.ProductPaymentModel.find({ email: email }).populate('id');
    return result;
});
const totalProducPayment = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * 10;
    const result = yield ProductPayment_model_1.ProductPaymentModel.find({}).skip(skip).limit(10);
    const total = yield ProductPayment_model_1.ProductPaymentModel.countDocuments();
    return { result, total };
});
exports.ServicePaymentServices = {
    getSingleUsersPaymentInfo, totalProducPayment
};
