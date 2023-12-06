import express,{Request,Response,NextFunction} from "express"
import { ProductService } from "./product.service";
import { Iproduct } from "./product.interface";
import { productModel } from "./product.model";

const createProductContoller = async(req:Request,res:Response,next:NextFunction) =>{
    try {
      const productData = req.body;
    
      const result = await ProductService.createProduct(productData);
      res.status(200).send({
        action : true,
        result
      })  
    } catch (error) {
       
        res.status(400).send({
            message : 'something went wrong'
        })
    }
}

const getAllProduct =async(req:Request,res:Response,next:NextFunction) : Promise<Iproduct[] | any> =>{
    try {
        const result = await ProductService.getAllProduct();
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        res.status(400).send({
            message : 'something went wrong'
        })
    }
}
const getSingleProductController = async(req:Request,res:Response,next:NextFunction) : Promise<Iproduct | any> =>{
try {
    const id = req.params.id;
    const result = await ProductService.getSingleProduct(id);
    res.status(200).send({
        action : true,
        result
    })
} catch (error) {
    res.status(400).send({
        message : 'something went wrong'
    })
}
}
const deletedSingleProductController =async(req:Request,res:Response,next:NextFunction) : Promise<Iproduct | any> =>{
try {
    const id = req.params.id;
    const result = await ProductService.deletedSingleProduct(id);
    res.status(200).send({
        action : true,
        result
    })
} catch (error) {
    res.status(400).send({
        message : 'something went wrong'
    })
}
} 


export const ProductController = {
    createProductContoller,
    getAllProduct,
    getSingleProductController,
    deletedSingleProductController
}