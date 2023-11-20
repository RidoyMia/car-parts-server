"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bestServices_controller_1 = require("./bestServices.controller");
const bestServiceRouter = express_1.default.Router();
bestServiceRouter.post('/create', bestServices_controller_1.BestServicesController.createServicesController);
bestServiceRouter.get('/all', bestServices_controller_1.BestServicesController.getAllService);
bestServiceRouter.get('/:id', bestServices_controller_1.BestServicesController.getSingleService);
exports.default = bestServiceRouter;
