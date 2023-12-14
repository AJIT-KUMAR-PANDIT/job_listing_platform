const mongoose = require("mongoose");
const Job = require("../Models/Job");

const jobView = async (req, res) => {
  const { jobPosition, skillsRequired } = req.body;

  try {
    const query = {};

    if (jobPosition) {
      query.jobPosition = { $regex: new RegExp(jobPosition, "i") };
    }

    if (skillsRequired?.length) {
      query.skillsRequired = { $in: skillsRequired };
    }

    const jobs = await Job.find(query);

    res.status(200).json({
      status: 200,
      message: "Jobs fetched successfully",
      data: jobs,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: err,
    });
  }
};

module.exports = jobView;
