import { NotImplemented } from '../errors/notimplemented.error.js';
import { ProblemService } from '../services/index.js';
import { ProblemRepository } from '../repositories/index.js';
import { StatusCodes } from 'http-status-codes';

const problemService = new ProblemService(new ProblemRepository());

export const pingProblemController = (req, res) =>{
    return res.json({message: "Ping controller is up"});
}

export const addProblem = async (req, res, next)=>{
    try{
        console.log("incoming request body", req.body);
        const newproblem = await problemService.createProblem(req.body)
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created a new problem",
            error: {},
            data: newproblem
        })
    }catch(error){
        next(error);
    }
}

export const getProblem = (req, res, next) =>{
    try{
        // nothing implemented
        throw new NotImplemented('getProblem');
    }catch(error){
        next(error);
    }
}

export const getProblems = (req, res, next) => {
    try{
        // nothing implemented
        throw new NotImplemented('getProblems');
    }catch(error){
        next(error);
    }
}

export const deleteProblem = (req,res, next) => {
    try{
        // nothing implemented
        throw new NotImplemented('deleteProblem');
    }catch(error){
        next(error);
    }
}

export const updateProblem = (req, res, next) => {
    try{
        // nothing implemented
        throw new NotImplemented('updateProblem');
    }catch(error){
        next(error);
    }
}