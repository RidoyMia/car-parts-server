import { Iproduct } from "./product.interface";
import { productModel } from "./product.model";

const createProduct = async(productData : Iproduct) : Promise<Iproduct |any> =>{
  
    const result = await productModel.create(productData);
    return result
}
const getAllProduct = async() : Promise<Iproduct[] | any>=>{
const result = await productModel.find();
return result
}
const getSingleProduct = async(id : string) : Promise<Iproduct | any> =>{
    const result = await productModel.findById(id);
    return result
}
const deletedSingleProduct =async(id : string) : Promise<Iproduct | any> =>{
    const result = await productModel.deleteOne({_id : id});
    return result
}
const updateSingleProductService = async(id : string, productInfo:Iproduct) : Promise<Iproduct | any> =>{
   const result = productModel.updateOne({_id :id},{$set : {
    name : productInfo.name,
    descriptions : productInfo.descriptions,
    price : productInfo.price,
    rating : productInfo.rating,
    picture : productInfo.picture

   }});
   return result
}

export const ProductService = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    deletedSingleProduct,
    updateSingleProductService
}