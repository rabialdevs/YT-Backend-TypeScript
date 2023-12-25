import dotenv from "dotenv";
import connectDB from "./db/index";
import { app } from "./app";
dotenv.config({
  path: './.env'
})
connectDB()
  .then(() => app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`)
  }))
  
  .catch((error) => {
  console.log("MONGODB connection failed",error);
  
})