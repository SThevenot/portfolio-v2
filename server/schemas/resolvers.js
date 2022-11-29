/** @format */

const { Project } = require("../models");

const resolvers = {
  Query: {
    projects: async (parent, { projectName }) => {
      const params = projectName ? { projectName } : {};
      return Project.find(params);
    },
  },
};

module.exports = resolvers;