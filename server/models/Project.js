/** @format */

// /** @format */

// const { Schema, model } = require("mongoose");

// const projectSchema = new Schema({
//   projectName: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   projectDescription: {
//     type: String,
//     required: "You need to leave a project!",
//     maxlength: 600,
//     trim: true,
//   },
//   projectImg: {
//     type: String,
//     required: true,
//   },
//   projectGithub: {
//     type: String,
//     required: true,
//   },
//   projectDeploy: {
//     type: String,
//     trim: true,
//   },
//   projectDate: {
//     type: String,
//     required: true,
//   },
// });

// const Project = model("Project", projectSchema);

// module.exports = Project;

module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    projectName: String,
    projectDescription: String,
    projectImg: String,
    projectGithub: String,
    projectDeploy: String,
    projectDate: String,
  });
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Project = mongoose.model("project", schema);
  return Project;
};
