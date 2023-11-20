"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Expert_controller_1 = require("./Expert.controller");
const ExpertRouter = express_1.default.Router();
ExpertRouter.post('/create', Expert_controller_1.ExpertController.createExpert);
ExpertRouter.get('/all', Expert_controller_1.ExpertController.getAllexpert);
ExpertRouter.get('/:id', Expert_controller_1.ExpertController.getSingleExpert);
exports.default = ExpertRouter;
