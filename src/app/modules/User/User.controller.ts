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
            console.log(result);
            const accesstoken = await jwt.sign({email : result?.email,role : result?.role},config.accesstoken as Secret ,{expiresIn : '3d'});
           console.log(accesstoken);
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

export const UserController = {
    createUserController,
    SignInUserController,getAllUsersController
}