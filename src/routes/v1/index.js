import express from 'express';

import { ProblemRouter } from './problems.routes.js';

const v1Router = express.Router();

v1Router.use('/problems',ProblemRouter);

export {v1Router};