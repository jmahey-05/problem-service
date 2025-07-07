import mongoose from "mongoose";
import { DB_URL, NODE_ENV } from "./server.config.js";

export const connectToDB = async () => {
    try {
        if(NODE_ENV == 'development'){
            await mongoose.connect(DB_URL);
        }
    } catch (error) {
        console.log("Unable to connect to the DB server");
        console.log(error)
    }
}
