import { IBlog } from "./Blog.interface";
import { BlogsModel } from "./Blog.model";


const createBlog = async(data :IBlog) =>{
    const result = await BlogsModel.create(data);
    return result
}
const getAllBlogs = async() :Promise<IBlog [] | any> =>{
    const result = await BlogsModel.find();
    return result
}

const getSingleBlogs = async(id :string) : Promise <IBlog | any> =>{
    const result = await BlogsModel.find({
        _id : id
    });
    return result;
}

export const blogServices = {
    createBlog,
    getAllBlogs,getSingleBlogs
}