/** @format */

const { Project, Skill, Comment } = require("../models");

const resolvers = {
  Query: {
    projects: async () => {
      return Project.find().populate('comments');
    },
    project: async (parent, { projectName }) => {
      return User.findOne({ projectName }).populate('thoughts');
    },
    comments: async (parent, { projectName }) => {
      const params = projectName ? { projectName } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    skills: async () => {
      return Skill.find();
    },
  },
};

module.exports = resolvers;
