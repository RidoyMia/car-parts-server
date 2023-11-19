import { BestServicesModel } from "./bestServices.model";
import { IbestServices } from "./bestservices.interface";

const createBestService = async(data : IbestServices) : Promise<IbestServices | any> =>{
    const result = await BestServicesModel.create(data)
    return result;
}
const getAllService = async(): Promise<IbestServices[] | any> =>{
    const result = await BestServicesModel.find();
    return result
}
const getSingleService = async(id : string) : Promise<IbestServices | any> =>{
    const result = await BestServicesModel.findById({
        _id : id
    })
    return result
}


export const BestServices = {
    createBestService,
    getAllService,
    getSingleService
}