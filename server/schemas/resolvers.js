/** @format */

const { Project } = require('../models');

const resolvers = {
  Query: {
    projects: async () => Project.find(),
    filterProjects: async (parent, { category }) => {
      const search = category;
      return Project.find({ category: { $regex: search } });
    },
  },
};
module.exports = resolvers;
