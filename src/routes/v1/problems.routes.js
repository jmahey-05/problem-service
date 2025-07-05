import express from 'express';

import { ProblemController } from '../../controllers/index.js';

const ProblemRouter = express.Router();

ProblemRouter.get('/ping',ProblemController.pingProblemController);

ProblemRouter.get('/:id', ProblemController.getProblem);

ProblemRouter.get('/', ProblemController.getProblems);

ProblemRouter.post('/', ProblemController.addProblem);

ProblemRouter.delete('/:id', ProblemController.deleteProblem);

ProblemRouter.put('/:id',ProblemController.updateProblem);

export { ProblemRouter };

