const mongoose = require("mongoose");
const Job = require("../Models/Job");

const postDiscrip = async (req, res) => {
      
        const { jobId } = req.body;
        try {
          const job = await Job.findById(jobId);
      
          if (job) {
            res.status(200).json({
              status: 200,
              message: 'Job details retrieved successfully',
              data: job,
            });
          } else {
            res.status(404).json({
              status: 404,
              message: 'Job not found',
            });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
          });
        }      
}

module.exports = postDiscrip;