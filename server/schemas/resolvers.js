/** @format */

const { Project, Category } = require("../models");

const resolvers = {
  Query: {
    project: async () => {
      return Project.find();
    },
    projectsbytech: async (parent, { category, technologies }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (technologies) {
        params.technologies = {
          $regex: technologies
        };
      }

      return await Project.find(params).populate('category');
    },
  },
};
module.exports = resolvers;
