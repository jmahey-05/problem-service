import express from 'express';

import { PORT } from './config/server.config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());

app.get('/ping',(req,res) =>{
    return res.json({message: 'Problem service is alive'});
})

app.listen(PORT,()=>{
    console.log(`Server started at PORT: ${PORT}`)
})
