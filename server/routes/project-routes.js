/** @format */

module.exports = (app) => {
  const projects = require("../controllers/projectController");

  var router = require("express").Router();

  router.get("/projectsList", projects.find);

  app.use("/api/projects", router);
};
