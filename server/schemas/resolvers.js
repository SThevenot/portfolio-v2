/** @format */

const { Project } = require("../models");

const resolvers = {
  Query: {
    project: async () => {
      return Project.find();
    },
    projectsReact: async (parent, { category }) => {
      return Project.find({"category" : /React/});
    },
  },
};
module.exports = resolvers;
