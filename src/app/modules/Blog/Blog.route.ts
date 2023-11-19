import express from "express"
import { blogController } from "./Blog.controller"

const BlogRouter = express.Router()

BlogRouter.post('/create',blogController.createBLog)
BlogRouter.get('/all',blogController.getAllBlogs)
BlogRouter.get('/:id',blogController.getSingleBlog)

export default BlogRouter; 