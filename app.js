const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//tell mongoose to use es6-promises
mongoose.Promise = global.Promise;
const todoRoutes = require('./routes/index');
const dB = 'mongodb://127.0.0.1/todolist';

mongoose.connect(dB, err =>{
    if(err) return console.log("Cannot connect to database");
    console.log('connection to database was succesful')
    
})

app.use('/api/todos',todoRoutes);

app.listen(3000,()=>{
    console.log('Server is up and running');
})