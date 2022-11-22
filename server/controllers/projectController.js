/** @format */

const Project = require("../models/Project");

module.exports = {
  getProjects(req, res) {
    Project.find()
      .then((projects) => res.json(projects))
      .catch((err) => res.status(500).json(err));
  },
};
