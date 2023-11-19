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

export const ProductService = {
    createProduct,
    getAllProduct,
    getSingleProduct
}