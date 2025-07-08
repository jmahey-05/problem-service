import winston from "winston";
import "winston-mongodb"
import { LOG_DB_URL } from "./server.config.js";

const allowedTransports = [];

//The below transport configuration enables logging in console
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        // First argument to the combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss' 
        }),
        //Second argument to the combine method whixh defines what is exactly going to be printed in log
        winston.format.printf((log)=> `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    )
}))

//The below transport configuration enables logging in mongoDB database
allowedTransports.push(
  new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs',
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss' 
      }),
      winston.format.json() 
    )
  })
);

//The below transport configuration enables logging in a file
allowedTransports.push(new winston.transports.File({
    filename: `app.log`
}))

const logger = winston.createLogger({
    //default formatting

    format: winston.format.combine(
        // First argument to the combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss' 
        }),
        //Second argument to the combine method whixh defines what is exactly going to be printed in log
        winston.format.printf((log)=> `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransports 
})

export {logger};
