import { NextFunction,Request,Response } from "express";
import { BestServices } from "./bestService.service";

const createServicesController = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const servicesData = req.body;
        const result = await BestServices.createBestService(servicesData);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
           message : 'something went wrong'
        })
    }
}
const getAllService = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const result = await BestServices.getAllService()
        console.log(result);
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
const getSingleService = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const id = req.params.id;
        const result = await BestServices.getSingleService(id);
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

export const BestServicesController = {
    createServicesController,
    getAllService,
    getSingleService
}