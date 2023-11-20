import express, { Application,NextFunction,Request,Response } from "express"
import cors from "cors"
import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';
import bestServiceRouter from "./app/modules/bestServices/bestServices.route";
import BlogRouter from "./app/modules/Blog/Blog.route";
import ExpertRouter from "./app/modules/Expert/Expert.route";
import ProductRouter from "./app/modules/product/product.route";
import ServicesRouter from "./app/modules/services/service.route";

const app : Application = express()
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))
app.use('/api/v1/bestService',bestServiceRouter)
app.use('/api/v1/blog',BlogRouter)
app.use('/api/v1/expert',ExpertRouter)
app.use('/api/v1/product',ProductRouter)
app.use('/api/v1/service',ServicesRouter)
app.use('/',async(req:Request,res:Response)=>{
    res.status(StatusCodes.OK).send({
       result : 'app is running'
    })
})


app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Not Found',
      errorMessages: [
        {
          path: req.originalUrl,
          message: 'API Not Found',
        },
      ],
    });
    next();
  });


  export default app;