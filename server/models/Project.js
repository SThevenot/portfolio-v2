/** @format */

const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
    trim: true,
  },
  projectDescription: {
    type: String,
    required: 'You need to leave a project!',
    maxlength: 600,
    trim: true,
  },
  projectImg: {
    type: String,
    required: true,
  },
  projectGithub: {
    type: String,
    required: true,
  },
  projectDeploy: {
    type: String,
    trim: true,
  },
  projectDate: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
});

const Project = model('Project', projectSchema);

module.exports = Project;
