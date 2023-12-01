import { Types } from "mongoose";

export interface IproductPayment {
    id:Types.ObjectId,email : string,
    name : string,
    transaction : string,
    paid : boolean
}