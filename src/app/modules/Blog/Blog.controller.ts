import { NextFunction,Request,Response } from "express";
import { blogServices } from "./Blog.service";
import { IBlog } from "./Blog.interface";

const createBLog = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const blogbody = req.body;
        const result = await blogServices.createBlog(blogbody);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        res.status(400).send({
            message : 'something went wrong'
        })
    }
}
const getAllBlogs=async(req:Request,res:Response,next:NextFunction):Promise<IBlog[] | any>=>{
    try {
        const result = await blogServices.getAllBlogs();
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        res.status(400).send({
            message :'something went wrong'
        })
    }
}
const getSingleBlog = async(req:Request,res:Response,next:NextFunction):Promise<IBlog[] | any>=>{
    try {
        const id = req.params.id;
        const result = await blogServices.getSingleBlogs(id);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        res.status(400).send({
            message : 'something went wrong'
        })
    }
}
export const blogController = {
    createBLog,
    getAllBlogs,
    getSingleBlog
}