/** @format */
const { Schema, model } = require('mongoose');

const SkillsSchema = new Schema({
  frontendSkills: {
    type: [String],
    required: true,
  },
  backendSkills: {
    type: [String],
    required: true,
  },
});

const Skill = model('Skill', SkillsSchema);

module.exports = Skill;
