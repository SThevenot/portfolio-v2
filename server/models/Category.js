/** @format */

const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  projectsUsed: [projectsUsedSchema],
});

const projectsUsedSchema = new Schema({
  projectsUsedId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  projectNames: {
    type: String,
    required: true,
  },
});

const Category = model('Category', categorySchema);

module.exports = Category;
