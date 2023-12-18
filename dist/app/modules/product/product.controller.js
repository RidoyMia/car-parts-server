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
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const createProductContoller = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_service_1.ProductService.createProduct(productData);
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
const getAllProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.getAllProduct();
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
        const result = yield product_service_1.ProductService.getSingleProduct(id);
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
const deletedSingleProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield product_service_1.ProductService.deletedSingleProduct(id);
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
const updateSingleProductController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { productInfo } = req.body;
        console.log(productInfo, 'updateinfo');
        const result = yield product_service_1.ProductService.updateSingleProductService(id, productInfo);
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
exports.ProductController = {
    createProductContoller,
    getAllProduct,
    getSingleProductController,
    deletedSingleProductController,
    updateSingleProductController
};
