import { IServicePayment } from "./ServicePayment.interface";
import { ServicePaymentModel } from "./ServicePayment.model";

const getSingleUsersPaymentInfoService = async(email : string) : Promise<IServicePayment[] | any> =>{
    const result = await ServicePaymentModel.find({email : email}).populate('productId');
    return result
}
const getAllServicesPayment = async(page : number) : Promise<IServicePayment[] | any> =>{
    const skip = (page -1) * 10
    const result = await ServicePaymentModel.find({}).skip(skip).limit(10)
    const total = await ServicePaymentModel.countDocuments();
    return {result,total}

}
export const ServicePaymentServices = {
    getSingleUsersPaymentInfoService,getAllServicesPayment
}