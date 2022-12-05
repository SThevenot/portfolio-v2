/** @format */

const { Project } = require("../models");

const resolvers = {
  Query: {
    projects: async () => {
      return Project.find();
    },
    projectsReact: async (parent, { category }) => {
      let search = category;
      return Project.find({ category: { $regex: search } });
    },
  },
};
module.exports = resolvers;
