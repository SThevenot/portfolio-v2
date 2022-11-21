/** @format */

let mongoose = require("mongoose");
let express = require("express");
let router = express.Router();

let project = require("../models/Project");

router.route("/projects").get((req, res) => {
  project.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
module.exports = router;