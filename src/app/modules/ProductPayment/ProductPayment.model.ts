import mongoose, { Schema } from "mongoose";
import { IproductPayment } from "./ProductPayment.Interface";

const productPaymentScheema = new Schema<IproductPayment>({
    id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'product',
        required : true
    },
    email :{
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    transaction : {
        type : String,
        required : true
    },
    paid : {
        type : Boolean,
        required : true,
        default : false
    }

},{
    timestamps : true
})


export const ProductPaymentModel = mongoose.model('productPayment',productPaymentScheema)