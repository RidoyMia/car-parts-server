import { IServicePayment } from "../ServicePayment/ServicePayment.interface";
import { ServicePaymentModel } from "../ServicePayment/ServicePayment.model";
import { ProductPaymentModel } from "./ProductPayment.model";

const getSingleUsersPaymentInfo = async(email : string) : Promise<IServicePayment[] | any> =>{
  const result = await ProductPaymentModel.find({email : email}).populate('id');
  return result;
}

export const ServicePaymentServices = {
    getSingleUsersPaymentInfo
}