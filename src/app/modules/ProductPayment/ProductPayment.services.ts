import { IServicePayment } from "../ServicePayment/ServicePayment.interface";
import { ServicePaymentModel } from "../ServicePayment/ServicePayment.model";
import { IproductPayment } from "./ProductPayment.Interface";
import { ProductPaymentModel } from "./ProductPayment.model";

const getSingleUsersPaymentInfo = async(email : string) : Promise<IServicePayment[] | any> =>{
  const result = await ProductPaymentModel.find({email : email}).populate('id');
  return result;
}
const totalProducPayment = async() : Promise<IproductPayment[] | any> =>{
  const result = await ProductPaymentModel.find({});
  const total = await ProductPaymentModel.countDocuments()
  return {result,total}
}
export const ServicePaymentServices = {
    getSingleUsersPaymentInfo,totalProducPayment
}