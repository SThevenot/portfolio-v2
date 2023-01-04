/** @format */
const { Schema, model } = require('mongoose');

const SkillSchema = new Schema({
  frontendSkills: {
    type: [String],
    required: true,
  },
  backendSkills: {
    type: [String],
    required: true,
  },
});

const Skill = model('Skill', SkillSchema);

module.exports = Skill;
