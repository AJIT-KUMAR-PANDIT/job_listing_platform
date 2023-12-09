const express = require("express");
const dotenv = require("dotenv").config();

const {health,register,login} = require('./Routes/routes');
const errorHandler = require("./Middleware/errorHandler");
const mongoose  = require("mongoose");



const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT; 
const MONGO_DB_URL = process.env.MONGO_DB_URL;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());











app.get('/',(req,res)=>{
    res.redirect('/health');
});

//____________________________________________________________________ [all apis]
app.use('/health',health);
app.use('/register',register);
app.use('/login',login);

//____________________________________________________________________ [errorHandler apis]
app.use(errorHandler);


//____________________________________________________________________ [server starting point]
app.listen(port,()=>{

    mongoose.connect(MONGO_DB_URL)
    .then(console.log(`Server is running on port ${port}`))
    .catch(err => console.error(err))


});

