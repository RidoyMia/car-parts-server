import { NextFunction,Request,Response } from "express";
import { Iuser } from "./User.interface";
import { IuserOptions, userService } from "./User.service";
import jwt, { Secret } from "jsonwebtoken"
import { config } from "../../../config";
const createUserController = async(req:Request,res:Response,next:NextFunction) :Promise<Iuser | any> =>{
    try {
       
        const userInfo:Iuser = req.body;
        const result = await userService.createUser(userInfo);
      
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        res.status(400).send({
            message : error
        })
    }
}
const SignInUserController = async(req:Request,res:Response,next:NextFunction) :Promise<Iuser | any> =>{
    try {
      
        //@ts-ignore
        const {email}:string = req.body;
    
        const result = await userService.SignInUser(email);
      
        if(result[0]?.email){
            
            const accesstoken = await jwt.sign({email : result[0]?.email,role : result[0]?.role},config.accesstoken as Secret ,{expiresIn : '3d'});
         
            res.status(200).send({
                action : true,
                
                accesstoken
               
            })
        }
       
    } catch (error) {
        res.status(400).send({
            message : error
        })
    }
}
const getAllUsersController = async(req:Request,res:Response,next:NextFunction) :Promise<Iuser | any> =>{
    try {
        //@ts-ignore
        const options:IuserOptions = req.query;
        const result = await userService.getAllUsers(options);
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
const IsAdingController = async(req:Request,res:Response,next:NextFunction) :Promise<Iuser | any> =>{
 try {
    const email = req.params.email;
    //@ts-ignore
    const {accesstoken}:string = req.headers;
 
    if(email && accesstoken){
        const verified = await jwt.verify(accesstoken,config.accesstoken as Secret);
      
        //@ts-ignore
        if(verified?.email){
            //@ts-ignore
         const result = await userService.isAdmin(verified?.email);
         res.status(200).send({
            action : true,
            role : result[0].role

         })
        }
    }
 } catch (error) {
    
 }    
}

export const UserController = {
    createUserController,
    SignInUserController,getAllUsersController,IsAdingController
}