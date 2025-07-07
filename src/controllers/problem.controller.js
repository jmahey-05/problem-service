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

export const getProblem = async(req, res, next) =>{
    try{
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched the problem",
            error: {},
            data: problem
        })
    }catch(error){
        next(error);
    }
}

export const getProblems = async (req, res, next) => {
    try{
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the problems',
            error: {},
            data: response
        })
    }catch(error){
        next(error);
    } 
}

export const deleteProblem = async (req,res, next) => {
    try{
        const response = await problemService.deleteProblem(req.params.id);
        return res.json({
            success: true,
            message: "Successfully deleted the problem",
            error: {},
            data: response
        })
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