import { Types } from "mongoose";

export interface IServicePayment {
    email : string,name : string,postCode:number,phone:number,price:number,productId : Types.ObjectId,transaction? : string,paid? : boolean,bookingDate : string
}