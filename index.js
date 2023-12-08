const express = require("express");
const dotenv = require("dotenv").config();

const health = require('./Routes/routes');
const mongoose  = require("mongoose");

const app = express();

const port = process.env.PORT; 
const MONGO_DB_URL = process.env.MONGO_DB_URL;




app.get('/',(req,res)=>{
    res.redirect('/health');
});

app.use('/',health);


app.listen(port,()=>{

    mongoose.connect(MONGO_DB_URL)
    .then(console.log(`Server is running on port ${port}`))
    .catch(err => console.error(err))


})

