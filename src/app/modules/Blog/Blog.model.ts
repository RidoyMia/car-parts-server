import mongoose, { Schema } from "mongoose";
import { IBlog } from "./Blog.interface";


const BlogScheema = new Schema<IBlog>({
    title : {
        type : String,
        unique : true,
        required : true
    },
    picture : {
        type : String,
        required : true
    },
    descriptions : {
        type : String,
        required : true
    }
})

export const BlogsModel = mongoose.model('blog',BlogScheema)