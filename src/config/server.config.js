import dotenv from 'dotenv';
 
dotenv.config();

const PORT =  process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const NODE_ENV = process.env.NODE_ENV || "development";
const LOG_DB_URL = process.env.LOG_DB_URL;
export {
    PORT,
    DB_URL,
    NODE_ENV,
    LOG_DB_URL
}