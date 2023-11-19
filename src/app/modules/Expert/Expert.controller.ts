import express,{NextFunction,Request,Response} from "express"
import { ExpertService } from "./Expert.service";
const createExpert = async(req:Request,res:Response,next:NextFunction)=> {
    try {
        const expertData = req.body;
        const result = await ExpertService.createExpert(expertData);
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
const getAllexpert =async(req:Request,res:Response,next:NextFunction)=> {
    try {
        const result = await ExpertService.getAllexpert();
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
const getSingleExpert =async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id = req.params.id;
        const result = await ExpertService.getSingleExpert(id);
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
export const ExpertController = {
    createExpert,
    getAllexpert,
    getSingleExpert
}