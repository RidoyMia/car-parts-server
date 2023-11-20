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
exports.servicesService = void 0;
const services_model_1 = require("./services.model");
const createProductService = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_model_1.ServiceModel.create(productData);
    return result;
});
const getAllProductService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_model_1.ServiceModel.find();
    return result;
});
const getSingleProductService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_model_1.ServiceModel.findById(id);
    return result;
});
exports.servicesService = {
    createProductService,
    getAllProductService,
    getSingleProductService
};
