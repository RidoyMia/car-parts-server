"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("./User.controller");
const userRouter = express_1.default.Router();
userRouter.post('/create', User_controller_1.UserController.createUserController);
userRouter.post('/signin', User_controller_1.UserController.SignInUserController);
userRouter.get('/all', User_controller_1.UserController.getAllUsersController);
userRouter.get('/:email', User_controller_1.UserController.IsAdingController);
userRouter.get('/role/:email', User_controller_1.UserController.getUserRoleController);
exports.default = userRouter;
