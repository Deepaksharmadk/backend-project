import mongoose from "mongoose";
import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDb from "./db/db.js";
dotenv.config({
    path: "./.env"
});
//two type connection in db
/*(async function connectDB() {
    import { DB_NAME } from "./constants.js";
    try{
        await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`)
       console.log("DB connection established");
    }
    catch(err){
        console.log(err)
    }
})()*/
connectDb()
.then (()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`server is running on port ${process.env.PORT}`)
    })
})
    .catch((err)=>{
        console.log("mongoose connection failed")
        process.exit(1)
    })