/** @format */

const db = require('../config/connection');
const { Project } = require('../models');

const projectData = require('./projectSeeds.json');

db.once('open', async () => {
  await Project.deleteMany({});

  const projects = await Project.insertMany(projectData);

  console.log('projects seeded!');
  process.exit(0);
});
