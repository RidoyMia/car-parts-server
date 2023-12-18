import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

//@ts-ignore
import SSLCommerzPayment  from "sslcommerz-lts"
import { ServiceModel } from "../services/services.model";
import { IServicePayment } from "./ServicePayment.interface";
import { config } from "../../../config";
import { ObjectId } from "mongodb";
import { ServicePaymentModel } from "./ServicePayment.model";
import { ServicePaymentServices } from "./ServicePayment.service";
const createPaymentController = async (req: Request, res: Response, next: NextFunction) => {
    const session = await mongoose.startSession();  // Added await
    try {
      await session.startTransaction();  // Added await
      const paymentInfo: IServicePayment = req.body;
      const getService = await ServiceModel.find({_id : paymentInfo.productId}).session(session)
       const newId = new ObjectId().toString();
      const data = {
        //@ts-ignore
        total_amount: paymentInfo.price,
        currency: 'USD',
        tran_id: newId, 
        // use unique tran_id for each api call
        success_url: `https://car-repairing-server.vercel.app/api/v1/servicePayment/update/${newId}`,
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
        let GatewayPageURL = apiResponse.GatewayPageURL;
        const orderData = {...paymentInfo,transaction : data?.tran_id,paid : false};
    //   console.log(orderData,'orderdata');
        const insertOrder = await (await ServicePaymentModel.create({...orderData})).$session(session)
        res.status(200).send({url : GatewayPageURL})
        
    });
     
      await session.commitTransaction();  // Added await
    } catch (error) {
      await session.abortTransaction();
      await session.endSession();
      res.status(400).send({
        message: error
      });
    }
  };
  const updatePaymentController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tran_id = req.params.id;
        const result = await ServicePaymentModel.updateOne({transaction : tran_id},{$set : {
            paid : true
        }})
        res.redirect(`http://localhost:5173/success/${tran_id}`)
    } catch (error) {
        res.status(400).send({
            message : 'something went wrong'
        })
    }
  }
  const getPaymentData = async (req: Request, res: Response, next: NextFunction) =>{
    try {
      const id = req.params.id;
      const result = await ServicePaymentModel.findOne({transaction : id}).populate('productId')
      res.status(200).send({
        action : true,
        result
      })
    } catch (error) {
      res.status(400).send({
        message : 'Something went wrong'
      })
    }
  }

  const getSingleUsersPaymentInfoServiceController = async (req: Request, res: Response, next: NextFunction) =>{
    try {
      const email = req.params.email;
      const result = await ServicePaymentServices.getSingleUsersPaymentInfoService(email);
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
  
  const getAllServicesPaymentController = async (req: Request, res: Response, next: NextFunction) =>{
    try {
      //@ts-ignore
      const page = parseInt(req.query.page);
      console.log(page,'service payment');
      const result = await ServicePaymentServices.getAllServicesPayment(page)
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
  export const PaymentController = {
    createPaymentController,updatePaymentController,getPaymentData,getSingleUsersPaymentInfoServiceController,getAllServicesPaymentController
  };
  