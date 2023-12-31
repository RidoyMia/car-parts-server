import dotenv from "dotenv"
import path from "path"
dotenv.config({path : path.join(process.cwd(),'.env')})

export const config = {
    database : process.env.DATABASE_URL,
    port : process.env.PORT,
    accesstoken : process.env.ACCESSTOKEN,
    storeId :process.env.Store_ID,
    storepassword : process.env.Store_Password,
}