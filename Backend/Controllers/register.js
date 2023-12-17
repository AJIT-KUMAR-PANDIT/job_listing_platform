const User = require("../Models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    const { name, email, mobile, password } = req.body;

    // Validate required fields
    if (!name || !email || !mobile || !password) {
        return res.status(400).json({
            status: 400,
            message: "All fields are required" 
        });
    }

    try {
        // Check if the user already exists
        if (await User.findOne({ email })) {
            return res.status(409).json({ 
                status: 409,
                message: "User already exists" 
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const userData = new User({
            name,
            email,
            mobile,
            password: hashedPassword,
        });

        // Save the new user to the database
        const newUser = await userData.save();

        // Respond with success message
        res.status(200).json({
            status: 200,
            message: "User created successfully",
            recruiterName: userData.name,
        });
    } catch (err) {
        // Handle any errors during the registration process
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
};

module.exports = register;
