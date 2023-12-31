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
exports.ServicesController = void 0;
const service_services_1 = require("./service.services");
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        console.log(productData, 'serviceData');
        const result = yield service_services_1.servicesService.createProductService(productData);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).send({
            message: error,
        });
    }
});
const getAllProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_services_1.servicesService.getAllProductService();
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
const getSingleProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield service_services_1.servicesService.getSingleProductService(id);
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
const deletedServiceController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield service_services_1.servicesService.deletedProductService(id);
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
const updatedSingleServiceController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const productInfo = req.body;
        console.log(productInfo, 'updateServices info');
        const result = yield service_services_1.servicesService.updatedSingleService(id, productInfo);
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
exports.ServicesController = {
    createProduct,
    getAllProduct,
    getSingleProductController,
    deletedServiceController,
    updatedSingleServiceController
};
