import { logger } from "../config/logger.config.js"
import { BaseError } from "../errors/base.error.js"
import { StatusCodes } from "http-status-codes"

export const errorHandler = (err, req, res, next) => {
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {}
        })
    }

    logger.error('Something wen wrong');
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Something went wrong',
        error: err,
        data: {}
    })
}