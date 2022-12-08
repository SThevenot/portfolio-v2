/** @format */
const db = require('../config/connection');
const { Project } = require('../models');
const projectSeeds = require('./projectSeeds.json');

db.once('open', async () => {
  await Project.deleteMany({});
  await Project.create(projectSeeds);

  console.log('all done!');
  process.exit(0);
});
