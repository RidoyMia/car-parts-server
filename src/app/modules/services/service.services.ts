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
const deletedProductService =async(id : string) : Promise<Iservices | any> =>{
    const result = await ServiceModel.deleteOne({_id : id});
    return result
}
const updatedSingleService =async(id : string, productData : Partial<Iservices>) : Promise<Iservices | any> =>{
  const result = await ServiceModel.updateOne({_id : id},{$set : {
    name : productData?.name,
    descriptions :productData?.descriptions,
    price : productData?.price,
    picture : productData?.picture,
    rating : productData?.rating,
    needTime : productData?.needTime,
    OldPrice : productData?.OldPrice
  }})
  return result 
}
export const servicesService = {
    createProductService,
    getAllProductService,
    getSingleProductService,
    deletedProductService,
    updatedSingleService
}