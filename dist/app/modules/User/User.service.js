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
exports.userService = void 0;
const User_model_1 = require("./User.model");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_model_1.UserModel.create(user);
    return result;
});
const SignInUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { email: email };
    const result = yield User_model_1.UserModel.find(query).exec();
    return result;
});
const getAllUsers = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchText = '', page = 1 } = options;
    //@ts-ignore
    const skip = (parseInt(page) - 1) * 10;
    const result = User_model_1.UserModel.find({ $and: [{
                $or: [
                    { name: {
                            $regex: searchText,
                            $options: 'i'
                        } }, {
                        email: {
                            $regex: searchText,
                            $options: 'i'
                        }
                    }
                ]
            }] }).skip(skip).limit(10);
    return result;
});
exports.userService = {
    createUser, SignInUser, getAllUsers
};
