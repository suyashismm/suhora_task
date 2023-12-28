const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const Connection=require('./database/db');
const userSignUp = require('./controller/user-signup');
const userLogin = require('./controller/user-login');
// const createEvent = require('./controller/create-event');

const app=express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

PORT= 8000;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);  


app.post('/signup',userSignUp);
app.post('/login',userLogin);
// app.post('/create-event',createEvent);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });