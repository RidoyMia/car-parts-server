import { IServicePayment } from "./ServicePayment.interface";
import { ServicePaymentModel } from "./ServicePayment.model";

const getSingleUsersPaymentInfoService = async(email : string) : Promise<IServicePayment[] | any> =>{
    const result = await ServicePaymentModel.find({email : email}).populate('productId');
    return result
}

export const ServicePaymentServices = {
    getSingleUsersPaymentInfoService
}