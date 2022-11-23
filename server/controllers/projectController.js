/** @format */

const db = require("../models");
const Project = db.projects;

// module.exports = {
//   getProjects(req, res) {
//     Project.findAll()
//       .then((projects) => res.json(projects))
//       .catch((err) => res.status(500).json(err));
//   },
// };

exports.find = (req, res) => {
  Project.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "fail" });
    });
};
