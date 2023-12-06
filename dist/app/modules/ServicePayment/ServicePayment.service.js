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
const ServicePayment_model_1 = require("./ServicePayment.model");
const getSingleUsersPaymentInfoService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ServicePayment_model_1.ServicePaymentModel.find({ email: email }).populate('productId');
    return result;
});
const getAllServicesPayment = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * 10;
    const result = yield ServicePayment_model_1.ServicePaymentModel.find({}).skip(skip).limit(10);
    const total = yield ServicePayment_model_1.ServicePaymentModel.countDocuments();
    return { result, total };
});
exports.ServicePaymentServices = {
    getSingleUsersPaymentInfoService, getAllServicesPayment
};
