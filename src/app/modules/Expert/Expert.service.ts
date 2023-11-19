import { Iexpert } from "./Expert.interface";
import { ExpertModel } from "./Expert.model";

const createExpert = async(expert : Iexpert) : Promise<Iexpert | any> =>{
    const result = await ExpertModel.create(expert);
    return result
}
const getAllexpert = async() :Promise<Iexpert[] | any> =>{
    const result = await ExpertModel.find()
    return result
}
const getSingleExpert = async(id :string) : Promise<Iexpert | any> =>{
    const result = await ExpertModel.findById(id);
    return result
}

export const ExpertService = {
    createExpert,getAllexpert,getSingleExpert
}