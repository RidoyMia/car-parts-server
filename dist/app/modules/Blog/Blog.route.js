"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Blog_controller_1 = require("./Blog.controller");
const BlogRouter = express_1.default.Router();
BlogRouter.post('/create', Blog_controller_1.blogController.createBLog);
BlogRouter.get('/all', Blog_controller_1.blogController.getAllBlogs);
BlogRouter.get('/:id', Blog_controller_1.blogController.getSingleBlog);
exports.default = BlogRouter;
