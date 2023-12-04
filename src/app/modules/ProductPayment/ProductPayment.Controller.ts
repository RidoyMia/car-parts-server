import { NextFunction ,Request,Response} from "express";
import mongoose from "mongoose";
import { config } from "../../../config";
// const SSLCommerzPayment = require('sslcommerz-lts')
//@ts-ignore
import SSLCommerzPayment from "sslcommerz-lts"
import { ObjectId } from "mongodb";
import { productModel } from "../product/product.model";
import { ProductPaymentModel } from "./ProductPayment.model";
import { ServicePaymentServices } from "./ProductPayment.services";
const createProductPayment = async(req:Request,res:Response,next:NextFunction) =>{
    const session  = mongoose.startSession()
    try {
        (await session).startTransaction();
        const productInfo = req.body;
      
        //@ts-ignore
        const gettingProdut = await  productModel.find({_id : productInfo.id})
      
        const newId = new ObjectId().toString()
        const data = {
            total_amount: gettingProdut[0].price,
            currency: 'USD',
            tran_id: newId, // use unique tran_id for each api call
            success_url: `http://localhost:7000/api/v1/productPayment/update/${newId}`,
            fail_url: 'http://localhost:3030/fail',
            cancel_url: 'http://localhost:3030/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: 'Computer.',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: 'Customer Name',
            cus_email: 'customer@example.com',
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '01711111111',
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };
        const sslcz = new SSLCommerzPayment(config.storeId, config.storepassword, false)
        //@ts-ignore
        sslcz.init(data).then(async(apiResponse) => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL
            const orderInfo = {...productInfo,transaction : newId,paid : false}
            const insertOrder = await ProductPaymentModel.create({...orderInfo});
          
            res.status(200).send({
              url : GatewayPageURL
            })
           
        });
        (await session).commitTransaction()
    } catch (error) {
        (await session).abortTransaction()
        ;(await session).endSession()
        res.status(400).send({
            message : error
        })
    }
}

const productPaymentUpdate = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const id = req.params.id;
     
        const result = await ProductPaymentModel.updateOne({transaction : id},{$set : {
            paid : true
        }})
        res.redirect(`http://localhost:5173/productDetails/${id}`)
        
    } catch (error) {
        res.status(400).send({
            message : 'something went wrong'
        })
    }
}
const getProductPayment = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const id = req.params.id;
       
        const result = await ProductPaymentModel.find({transaction : id}).populate('id');
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

const getSingleUsersPaymentInfoController = async(req:Request,res:Response,next:NextFunction) =>{
    try {
     const email = req.params.email;
     const result = await ServicePaymentServices.getSingleUsersPaymentInfo(email);
     res.status(200).send({
        action : true,
        result
     })
    } catch (error) {
        res.status(200).send({
            message : 'something went wrong'
        })
    }
}

export const ProductPaymentController = {
    createProductPayment,productPaymentUpdate,getProductPayment,getSingleUsersPaymentInfoController
}