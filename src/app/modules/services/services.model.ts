import mongoose, { Schema } from "mongoose";
import { Iservices } from "./services.interface";




const serviceScheema = new Schema<Iservices>({
    name : {
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
    },
    price : {
        type : Number,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    OldPrice : {
        type : Number,
        required : true
    },
    needTime: {
        type : String,
        required : true
    }

})

export const ServiceModel = mongoose.model('service',serviceScheema)