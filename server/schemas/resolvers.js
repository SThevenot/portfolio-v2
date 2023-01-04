/** @format */

const { Project } = require("../models");

const resolvers = {
  Query: {
    projects: async () => {
      return Project.find();
    },
  },
};

module.exports = resolvers;
