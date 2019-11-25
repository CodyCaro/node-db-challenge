const express = require("express");

const ProjectRouter = require("./data/project-router.js");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectRouter);

module.exports = server;
