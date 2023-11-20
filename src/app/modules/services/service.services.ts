import { Iservices } from "./services.interface";
import { ServiceModel } from "./services.model";


const createProductService = async(productData : Iservices) : Promise<Iservices |any> =>{
    const result = await ServiceModel.create(productData);
    return result
}
const getAllProductService  = async() : Promise<Iservices[] | any>=>{
const result = await ServiceModel.find();
return result
}
const getSingleProductService  = async(id : string) : Promise<Iservices | any> =>{
    const result = await ServiceModel.findById(id);
    return result
}

export const servicesService = {
    createProductService,
    getAllProductService,
    getSingleProductService
}