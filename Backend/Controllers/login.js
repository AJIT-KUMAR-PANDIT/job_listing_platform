const User = require("../Models/User");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();


secretKey = process.env.SECRET_KEY;

const login = async (req, res) => {
    const { email, password } = req.body;

    if (await bcrypt.compare(password, await User.findOne({ email }).then((user) => user.password))) {
        hashedPassword = await bcrypt.hash(password, 10);
        const token = jwt.sign({ email , hashedPassword }, secretKey, { expiresIn: '1h' });
        
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60
        }).status(200).json({
            status: 200,
            message: "User logged in successfully",
            token:token
        });
    } else {
        res.status(401).json({
            status: 401,
            message: "Invalid email or password",

        }
        );
    }
}


module.exports = login;