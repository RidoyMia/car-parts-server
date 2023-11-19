import { Iservices } from "./services.interface";
import { ServiceModel } from "./services.model";


const createProduct = async(productData : Iservices) : Promise<Iservices |any> =>{
    const result = await ServiceModel.create(productData);
    return result
}
const getAllProduct = async() : Promise<Iservices[] | any>=>{
const result = await ServiceModel.find();
return result
}
const getSingleProduct = async(id : string) : Promise<Iservices | any> =>{
    const result = await ServiceModel.findById(id);
    return result
}

export const servicesService = {
    createProduct,
    getAllProduct,
    getSingleProduct
}