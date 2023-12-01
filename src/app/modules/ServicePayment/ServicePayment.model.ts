import { Schema, Types } from "mongoose";
import { IServicePayment } from "./ServicePayment.interface";
import mongoose from "mongoose";
const ServicePaymentScheema = new Schema<IServicePayment>({
    email : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    postCode:{
        type : Number,
        required : true
    },phone:{
        type : Number,
        required : true
    },price:{
        type : Number,
        required : true
    },productId :{
       type : mongoose.Schema.Types.ObjectId,
       ref : 'service',
       required : true
    },transaction : {
        type : String,
        required : false
    },paid : {
        type : Boolean,
        required : false

    }, bookingDate : {
        type : String,
        required : true
    }
},{
   timestamps : true
})


export const ServicePaymentModel = mongoose.model('servicePayment', ServicePaymentScheema)