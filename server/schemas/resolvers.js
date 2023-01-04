/** @format */

const { Project, Skill } = require("../models");

const resolvers = {
  Query: {
    projects: async () => {
      return Project.find();
    },
    skills: async () => {
      return Skill.find();
    },
  },
};

module.exports = resolvers;
