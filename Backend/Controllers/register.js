const User = require("../Models/User");
mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    const { name, email, mobile, password } = req.body;
    hashedPassword = await bcrypt.hash(password, 10);

    if (!name || !email || !mobile || !password) {
        return res.status(400).json({
            status: 400,
            message: "All fields are required" 
        });
    }

    if (await User.findOne({ email })) {
        return res.status(409).json({ 
            status: 409,
            message: "User already exists" 
        })
    }
    const userData = new User({
        name,
        email,
        mobile,
        password:hashedPassword,
    });
    try {
        const newUser = await userData.save();
        res.status(200).json({
            status: 200,
            message: "User created successfully",
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
};


module.exports = register ;