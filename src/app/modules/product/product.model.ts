import mongoose, { Schema } from "mongoose";
import { Iproduct } from "./product.interface";



const productSceema = new Schema<Iproduct>({
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
    }

})

export const productModel = mongoose.model('product',productSceema)