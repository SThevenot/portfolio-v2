/** @format */

const { Project } = require('../models');

const resolvers = {
  Query: {
    projects: async () => Project.find(),
    skills: async () => Skill.find(),
  },
};
module.exports = resolvers;
