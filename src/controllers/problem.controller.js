import {StatusCodes} from 'http-status-codes';
import { NotImplemented } from '../errors/notimplemented.error.js';

export const pingProblemController = (req, res) =>{
    return res.json({message: "Ping controller is up"});
}

export const addProblem = (req, res, next)=>{
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
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