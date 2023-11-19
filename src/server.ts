import mongoose from "mongoose"
import app from "./app"
import { config } from "./config"


async function bootstrap (){
 mongoose.connect(config.database as string)
 app.listen(config.port, () => {
    console.log(`Application  listening on port ${config.port}`)
  })
}
bootstrap()
