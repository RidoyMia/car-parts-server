import { NextFunction,Request,Response } from "express";
import jwt, { Secret } from "jsonwebtoken"
import { config } from "../config";
export const AuthGuard = async(req:Request,res:Response,next:NextFunction) =>{
  const {accesstoken} = req.headers;
  const email = req.params.email;

  if(!accesstoken || accesstoken === null){
    res.status(401).send({
        message : 'Unathorized access'
    })
  }else{
    
   try {
    const verify = jwt.verify(accesstoken as string, config.accesstoken as Secret)
    //@ts-ignore
    if(!verify?.email || verify?.email != email){
        res.status(401).send({
            message : 'Unathorized access'
        }) 
    }
    else{
        next()
    }
   } catch (error) {
    //@ts-ignore
   
    res.status(401).send({
        message : 'something went wrong',
        //@ts-ignore
        name : error?.name,
    })
   }
//@ts-ignore
    
  }
 
}