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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_service_1 = require("./User.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../../config");
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userInfo = req.body;
        const result = yield User_service_1.userService.createUser(userInfo);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        res.status(400).send({
            message: error
        });
    }
});
const SignInUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        //@ts-ignore
        const { email } = req.body;
        const result = yield User_service_1.userService.SignInUser(email);
        if ((_a = result[0]) === null || _a === void 0 ? void 0 : _a.email) {
            const accesstoken = yield jsonwebtoken_1.default.sign({ email: (_b = result[0]) === null || _b === void 0 ? void 0 : _b.email, role: (_c = result[0]) === null || _c === void 0 ? void 0 : _c.role }, config_1.config.accesstoken, { expiresIn: '3d' });
            res.status(200).send({
                action: true,
                accesstoken
            });
        }
    }
    catch (error) {
        res.status(400).send({
            message: error
        });
    }
});
const getAllUsersController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const options = req.query;
        const result = yield User_service_1.userService.getAllUsers(options);
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
const IsAdingController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        //@ts-ignore
        const { accesstoken } = req.headers;
        if (email && accesstoken) {
            const verified = yield jsonwebtoken_1.default.verify(accesstoken, config_1.config.accesstoken);
            //@ts-ignore
            if (verified === null || verified === void 0 ? void 0 : verified.email) {
                //@ts-ignore
                const result = yield User_service_1.userService.isAdmin(verified === null || verified === void 0 ? void 0 : verified.email);
                res.status(200).send({
                    action: true,
                    role: result[0].role
                });
            }
        }
    }
    catch (error) {
    }
});
exports.UserController = {
    createUserController,
    SignInUserController, getAllUsersController, IsAdingController
};
