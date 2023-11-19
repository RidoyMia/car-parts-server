import mongoose, { Schema } from "mongoose";
import { IbestServices } from "./bestservices.interface";

const bestServicesSchema = new Schema<IbestServices>({
    title : {

        type : String,
        unique : false,
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

export const BestServicesModel = mongoose.model('bestService',bestServicesSchema)