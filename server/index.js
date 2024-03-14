import express from 'express';
import dotenv from 'dotenv'

import Connection from './database/db.js';
import defaultData from './default.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();
dotenv.config();


// cors middleware and body-parser middleware after doing npm i cors and importing it:-
app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
// route middlweware:-
app.use('/', router)

const PORT=5000

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);
app.listen(PORT, ()=>{
    console.log(`server started successfully on port ${PORT}`)
})

defaultData();

