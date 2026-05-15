import mongoose from "mongoose";
import connectDb from "./db/index.js";
import dotenv from "dotenv"

// require('dotenv').config({path : {'./env'}})

dotenv.config({
    path: "./env"
})
connectDb()










// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}`/`${DB_NAME}`)
        
//         app.on("error",(error)=>{
//             console.log("error",error);
//             throw error
//         })
        
//         app.listen(process.env.PORT,()=>{
//             console.log(`listening to the port : ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.log(error);
//         throw error
//     }
// })()


