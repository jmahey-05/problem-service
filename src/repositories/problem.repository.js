import { NotFound } from "../errors/notfound.error.js";
import { Problem } from "../models/index.js";

export class ProblemRepository{
    async createProblem(problemData) {
        try {
            const problem = await Problem.create(
                {
                    title: problemData.title,
                    description: problemData.description,
                    testCases: (problemData.testCases) ? problemData.testCases  : []
                }
            )

            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id){
        try {
            const problem = await Problem.findById(id);
            if(!problem){
                throw new NotFound("Problem", id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id){
        try {
            const problem = await Problem.findByIdAndDelete(id);
            if(!problem){
                throw new NotFound("Problem", id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(id, updatedData){
        try{
            const problem = await Problem.findByIdAndUpdate(id, updatedData, {new: true});
            if(!problem){
                throw new NotFound("Problem", id);
            }
            return problem;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}