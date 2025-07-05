import {StatusCodes} from 'http-status-codes';

export const pingProblemController = (req, res) =>{
    return res.json({message: "Ping controller is up"});
}

export const addProblem = (req, res)=>{
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

export const getProblem = (req, res) =>{
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

export const getProblems = (req, res) => {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

export const deleteProblem = (req,res) => {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

export const updateProblem = (req, res) => {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}