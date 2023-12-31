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
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
const createProduct = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.create(productData);
    return result;
});
const getAllProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.find();
    return result;
});
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findById(id);
    return result;
});
const deletedSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.deleteOne({ _id: id });
    return result;
});
const updateSingleProductService = (id, productInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = product_model_1.productModel.updateOne({ _id: id }, { $set: {
            name: productInfo.name,
            descriptions: productInfo.descriptions,
            price: productInfo.price,
            rating: productInfo.rating,
            picture: productInfo.picture
        } });
    return result;
});
exports.ProductService = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    deletedSingleProduct,
    updateSingleProductService
};
