const jwt = require("jsonwebtoken");
const express = require("express");
const dotenv = require("dotenv").config();

const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());



const auth = (req, res, next) => {
    try {


        let token = req.headers.cookie;
        if (token) {
            token = token.split("token=")[1];
            const user_data = jwt.verify(token, process.env.SECRET_KEY);
            req.email = user_data.email;
        } else {
            res.status(401).json({
                status: 401,
                message: "Unauthorized user"
            })
            return;
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            status: 401,
            message: "Unauthorized user"
        })
    }
}

module.exports = auth;