import mongoose, { Schema } from "mongoose";
import { Iuser } from "./User.interface";

const UserScheema = new Schema<Iuser>({
    name : {
        type : String,
        required : true,

    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['user', 'admin'],
        default : 'user'
    }
},{
    timestamps : true
})

export const UserModel = mongoose.model('user',UserScheema)


