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
exports.blogController = void 0;
const Blog_service_1 = require("./Blog.service");
const createBLog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogbody = req.body;
        const result = yield Blog_service_1.blogServices.createBlog(blogbody);
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
const getAllBlogs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Blog_service_1.blogServices.getAllBlogs();
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
const getSingleBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield Blog_service_1.blogServices.getSingleBlogs(id);
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
exports.blogController = {
    createBLog,
    getAllBlogs,
    getSingleBlog
};
