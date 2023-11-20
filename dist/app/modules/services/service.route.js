"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const services_controller_1 = require("./services.controller");
const ServicesRouter = express_1.default.Router();
ServicesRouter.post('/create', services_controller_1.ServicesController.createProduct);
ServicesRouter.get('/all', services_controller_1.ServicesController.getAllProduct);
ServicesRouter.get('/:id', services_controller_1.ServicesController.getSingleProductController);
exports.default = ServicesRouter;
