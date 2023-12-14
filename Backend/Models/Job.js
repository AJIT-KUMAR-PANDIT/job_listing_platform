mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    companyName: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    jobPosition: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        enum: ["Full-Time", "Part-Time", "Contract", "Internship"],
        required: true,
    }
    ,remoteOffice: {
        type: String,
        enum: ["remote", "office", "hybrid"],
        required: true,
    }
    ,location: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    aboutCompany: {
        type: String,
        required: true,
    },
    skillsRequired: {
        type: [String],
        required: true,
    },
    information: {
        type: String,
        required: true,
    },
});
const Job = mongoose.model("JobListiningPlatform_JopPost", jobSchema);
module.exports = Job;