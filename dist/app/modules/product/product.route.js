"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const ProductRouter = express_1.default.Router();
ProductRouter.post('/create', product_controller_1.ProductController.createProduct);
ProductRouter.get('/all', product_controller_1.ProductController.getAllProduct);
ProductRouter.get('/:id', product_controller_1.ProductController.getSingleProductController);
exports.default = ProductRouter;
