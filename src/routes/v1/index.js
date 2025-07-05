import express from 'express';

import { problemRouter } from './problems.routes.js';

const v1Router = express.Router();

v1Router.use('/problems',problemRouter);

export {v1Router};