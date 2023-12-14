const Job = require("../Models/Job");
const mongoose = require("mongoose");

const jobUpdate = async (req, res) => {
    const { jobId, companyName, logo, jobPosition, salary, jobType, remoteOffice, location, jobDescription, aboutCompany, skillsRequired, information } = req.body;

    try {
        const updateData = {
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
        };

       
        if (!jobId) {
            return res.status(400).json({
                status: 400,
                message: "jobId is required for updating"
            });
        }

        const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, updateData, { new: true });

        if (updatedJob) {
            res.status(200).json({
                status: 200,
                message: "Job updated successfully",
                data: updatedJob,
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "Job not found or no updates made",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        });
    }
};

module.exports = jobUpdate;
