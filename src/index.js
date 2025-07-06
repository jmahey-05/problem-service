import express from 'express';

import { PORT } from './config/server.config.js';
import { apiRouter } from './routes/index.js';
import { errorHandler } from './utils/errorHandler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.text());

app.use('/api',apiRouter);

app.get('/ping',(req,res) =>{
    return res.json({message: 'Problem service is alive'});
})

// last middleware if any error comes
app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`Server started at PORT: ${PORT}`)

})
