import { Iuser } from "./User.interface";
import { UserModel } from "./User.model";
export interface IuserOptions {
   searchText : string,
   page : number
}
const createUser = async(user:Iuser)=>{
  const result = await UserModel.create(user);
  return result;
}
const SignInUser = async(email : string) : Promise<Iuser | any> =>{
   
    const query = {email : email}
    const result =await UserModel.find(query).exec()
    return result;
}
const getAllUsers =async(options : IuserOptions) : Promise<Iuser[] | any> =>{
    const {searchText='',page=1} = options;
    //@ts-ignore
    const skip = (parseInt(page)-1) * 10;
   
    const result = UserModel.find({$and : [{
        $or : [
           { name : {
                $regex : searchText,
                $options : 'i'
            }},{
                email : {
                    $regex : searchText,
                    $options : 'i'
                }
            }
        ]
    }]}).skip(skip).limit(10);
    return result

}
const isAdmin =async(email : string) : Promise<Iuser[] | any> =>{
    const result = await UserModel.find({email : email});
    return result
} 
const getUserRole =async(email : string) : Promise<Iuser[] | any> =>{
    const result = await UserModel.find({email : email});
    return result
} 


export const userService = {
    createUser,SignInUser,getAllUsers,isAdmin,getUserRole
}