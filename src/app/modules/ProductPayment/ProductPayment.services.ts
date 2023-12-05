import { IServicePayment } from "../ServicePayment/ServicePayment.interface";
import { ServicePaymentModel } from "../ServicePayment/ServicePayment.model";
import { IproductPayment } from "./ProductPayment.Interface";
import { ProductPaymentModel } from "./ProductPayment.model";

const getSingleUsersPaymentInfo = async(email : string) : Promise<IServicePayment[] | any> =>{
  const result = await ProductPaymentModel.find({email : email}).populate('id');
  return result;
}
const totalProducPayment = async(page : number) : Promise<IproductPayment[] | any> =>{
  const skip = (page -1) * 10;
  console.log(page,'pagege');
  const result = await ProductPaymentModel.find({}).skip(skip).limit(10);
  const total = await ProductPaymentModel.countDocuments()
  return {result,total}
}
export const ServicePaymentServices = {
    getSingleUsersPaymentInfo,totalProducPayment
}