const Job = require('../Models/Job');
const mongoose = require("mongoose");



const jobPost = async (req, res) => {
    const { companyName, logo, jobPosition, salary, jobType, remoteOffice, location, jobDescription, aboutCompany, skillsRequired, information } = req.body;
    const newJob = new Job({
        companyName,
        logo,
        jobPosition,
        salary,
        jobType,
        remoteOffice,
        location,
        jobDescription,
        aboutCompany,
        skillsRequired,
        information
    })
    try {
        const savedJob = await newJob.save();
        res.status(200).json({
            status: 200,
            message: "Job posted successfully",
            // data:savedJob
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: "Internal server error",
        });
    }
}
module.exports = jobPost;