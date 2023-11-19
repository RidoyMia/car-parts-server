import mongoose, { Schema } from "mongoose";
import { Iexpert } from "./Expert.interface";


const expertSchema = new Schema<Iexpert>({
    name : {
        type : String,
        required : true
    },
    picture : {
        type : String,
        required : true
    },
    About : {
        type : String,
        required : true
    },
    expert : {
        type : String,
        required : true
    }
})

export const ExpertModel = mongoose.model('Exper',expertSchema)