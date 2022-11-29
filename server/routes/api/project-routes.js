/** @format */

const router = require('express').Router();
const { getAllProjects } = require("../../controllers/projectController");

router.route('/projects').get(getAllProjects);

module.exports = router;
