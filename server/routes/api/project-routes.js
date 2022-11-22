/** @format */

const router = require("express").Router();

const { getProjects } = require("../../controllers/projectController");

router.route("/projects").get(getProjects);
module.exports = router;
