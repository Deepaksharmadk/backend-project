import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDb=async ()=>{
    try {
         await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`);
    } catch (error) {
        console.log(error);
    }
}
export default connectDb;