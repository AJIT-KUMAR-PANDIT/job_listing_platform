const express = require('express');

const health = async (req, res) => {
    res.json({
        status: 200,
        serverName: "Job Listing Platform",
        version: "1.0.0",
        message: "Server is up and running"
    });
}

module.exports = health;