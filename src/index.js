import express from 'express';

import { PORT } from './config/server.config.js';
import { apiRouter } from './routes/index.js';
import { errorHandler } from './utils/errorHandler.js';
import { connectToDB } from './config/db.config.js';

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
app.listen(PORT,async ()=>{
    console.log(`Server started at PORT: ${PORT}`)
    await connectToDB();
    console.log("Successfully connected to db")
})
