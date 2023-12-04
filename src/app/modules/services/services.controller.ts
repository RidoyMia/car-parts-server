import express,{Request,Response,NextFunction} from "express"
import { servicesService } from "./service.services";
import { Iservices } from "./services.interface";


const createProduct = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        
      const productData = req.body;
    
      const result = await servicesService.createProductService(productData);
      res.status(200).send({
        action : true,
        result
      })  
    } catch (error) {

        //@ts-ignore
     
        res.status(400).send({
            message : error,
            
        })
    }
}

const getAllProduct =async(req:Request,res:Response,next:NextFunction) : Promise<Iservices[] | any> =>{
    try {
        const result = await servicesService.getAllProductService();
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
const getSingleProductController = async(req:Request,res:Response,next:NextFunction) : Promise<Iservices | any> =>{
try {
    const id = req.params.id;
    const result = await servicesService.getSingleProductService(id);
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


export const ServicesController = {
    createProduct,
    getAllProduct,
    getSingleProductController
}