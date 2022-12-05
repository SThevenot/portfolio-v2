/** @format */
const db = require("../config/connection");
const {Project} = require("../models");
const projectSeeds = require("./projectSeeds.json");

 db.once("open", async () => {
  try {
    await Project.deleteMany({});
    await Project.create(projectSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
    });


// const db = require("./connection");
// const { Project, Category } = require("../models");

// db.once("open", async () => {
//   await Category.deleteMany();
//   console.log("previous categories deleted");
//   const categories = await Category.insertMany([
//     { name: "React" },
//     { name: "CSS" },
//     { name: "HTML" },
//     { name: "Javascript" },
//     { name: "Nodejs" },
//     { name: "Expressjs" },
//     { name: "MongoDB" },
//     { name: "Bootstrap" },
//     { name: "GraphQL" },
//     { name: "Apollo" },
//     { name: "Mongoose" },
//     { name: "JSONWebToken" },
//     { name: "bcrypt" },
//     { name: "Handlebars" },
//     { name: "HTML" },
//     { name: "mySQL" },
//     { name: "Axios" },
//     { name: "APIs" },
//     { name: "Jest" },
//     { name: "Inquirer" },
//     { name: "jQuery" },
//     { name: "momentjs" },
//   ]);

//   console.log("categories seeded");

//   await Project.deleteMany();

//   const projects = await Project.insertMany([
//     {
//       projectName: "Fit The Mood",
//       projectDescription:
//         "This application is a one-stop website that allows the user to keep track of their emotions and workouts over time.",
//       projectImg:
//         "https://github.com/SThevenot/portfolio-v2/blob/main/client/src/project-images/home-screenshot.png?raw=true",
//       projectGithub: "https://github.com/halliemestas/FitTheMood",
//       projectDeploy: "https://limitless-river-86981.herokuapp.com/",
//       projectDate: "October 17th, 2022",
//       category: [
//         categories[0]._id,
//         categories[1]._id,
//         categories[4]._id,
//         categories[5]._id,
//         categories[6]._id,
//         categories[7]._id,
//         categories[8]._id,
//         categories[9]._id,
//         categories[10]._id,
//         categories[11]._id,
//         categories[12]._id,
//         categories[13]._id,
//       ],
//     },
//     {
//       projectName: "HobbySpot",
//       projectDescription:
//         "This project is a blog style application where users can login and post about what they enjoy as hobbies.",
//       projectImg:
//         "https://github.com/SThevenot/portfolio-v2/blob/eaf436ededd0f1b65c7ff760ba6e0dde72ce9a15/client/src/project-images/Screenshot%20(51).png?raw=true",
//       projectGithub: "https://github.com/Ehren-Lewis/HobbySpot",
//       projectDeploy: "https://damp-reaches-02576.herokuapp.com/",
//       projectDate: "September 21st, 2022",
//       category: [
//         categories[14]._id,
//         categories[1]._id,
//         categories[3]._id,
//         categories[7]._id,
//         categories[15]._id,
//         categories[5]._id,
//         categories[12]._id,
//         categories[16]._id,
//         categories[11]._id,
//       ],
//     },
//     {
//       projectName: "Brewfinder",
//       projectDescription:
//         "This is a group project that allows the user to type in a city and state to view local breweries and weather data using APIs.",
//       projectImg:
//         "https://github.com/SThevenot/portfolio-v2/blob/main/client/src/project-images/brewfinder.png?raw=true",
//       projectGithub: "https://github.com/relero90/brewfinder",
//       projectDeploy: "https://relero90.github.io/brewfinder/",
//       projectDate: "August 22nd, 2022",
//       category: [
//         categories[2]._id,
//         categories[1]._id,
//         categories[3]._id,
//         categories[17]._id,
//         categories[7]._id,
//       ],
//     },
//     {
//       projectName: "Note-Taker",
//       projectDescription:
//         "This a functionional web application that allows the user to take notes and save them locally.",
//       projectImg:
//         "https://github.com/SThevenot/portfolio-v2/blob/main/client/src/project-images/note-taker.png?raw=true",
//       projectGithub: "https://github.com/SThevenot/note-taker",
//       projectDate: "September 7th, 2022",
//       category: [
//         categories[1]._id,
//         categories[2]._id,
//         categories[3]._id,
//         categories[4]._id,
//         categories[5]._id,
//         categories[7]._id,
//       ],
//     },
//     {
//       projectName: "Employee Tracker",
//       projectDescription:
//         "A mySQL application that will prompt the user if they want to view all of the employees, departments, or roles and if they want to edit them as well.",
//       projectImg:
//         "https://github.com/SThevenot/portfolio-v2/blob/main/client/src/project-images/employee-tracker.png?raw=true",
//       projectGithub: "https://github.com/SThevenot/employee-tracker",
//       projectDate: "September 8th, 2022",
//       category: [
//         categories[15]._id,
//         categories[3]._id,
//         categories[4]._id,
//         categories[19]._id,
//       ],
//     },
//     {
//       projectName: "Timed Quiz",
//       projectDescription:
//         "This is a website that will take you through a timed quiz. Time will be deducted if you answer a question incorrectly. At the end you can save your score.",
//       projectImg:
//         "https://github.com/SThevenot/portfolio-v2/blob/eaf436ededd0f1b65c7ff760ba6e0dde72ce9a15/client/src/project-images/Screenshot%20(25).png?raw=true",
//       projectGithub: "https://github.com/SThevenot/timedQuiz",
//       projectDeploy: "https://sthevenot.github.io/timedQuiz/",
//       projectDate: "August 11th, 2022",
//       category: [categories[1]._id, categories[2]._id, categories[3]._id],
//     },
//     {
//       projectName: "README.md Generator",
//       projectDescription:
//         "This is a program that prompts the user with questions about their project and creates a dynamic and concise markdown file.",
//       projectImg:
//         "https://github.com/SThevenot/portfolio-v2/blob/main/client/src/project-images/readme-generator.png?raw=true",
//       projectGithub: "https://github.com/SThevenot/readme-generator",
//       projectDate: "October 5th, 2022",
//       category: [
//         categories[19]._id,
//         categories[1]._id,
//         categories[2]._id,
//         categories[3]._id,
//       ],
//     },
//     {
//       projectName: "Random Password Generator",
//       projectDescription:
//         "This website prompts the user for what specifications they'd like for their password and generates a random password based on that. ",
//       projectImg:
//         "https://github.com/SThevenot/portfolio-v2/blob/main/client/src/project-images/random-password.png?raw=true",
//       projectGithub: "https://github.com/SThevenot/random-password",
//       projectDeploy: "https://sthevenot.github.io/random-password/",
//       projectDate: "October 5th, 2022",
//       category: [categories[1]._id, categories[2]._id, categories[3]._id],
//     },
//     {
//       projectName: "Back-End Social Network",
//       projectDescription:
//         "This is a back-end application that allows the user to create thoughts, reactions, and add friends as well.",
//       projectImg:
//         "https://github.com/SThevenot/portfolio-v2/blob/main/client/src/project-images/social-network.png?raw=true",
//       projectGithub: "https://github.com/SThevenot/social-network",
//       projectDate: "October 2nd, 2022",
//       category: [
//         categories[4]._id,
//         categories[5]._id,
//         categories[6]._id,
//         categories[10]._id,
//       ],
//     },
//     {
//       projectName: "Work Team Generator",
//       projectDescription:
//         "A website that allows the user to create a team of managers, engineers, and interns in the backend and display them on the frontend.",
//       projectImg:
//         "https://github.com/SThevenot/portfolio-v2/blob/main/client/src/project-images/team-generator.png?raw=true",
//       projectGithub: "https://github.com/SThevenot/team-generator",
//       projectDeploy: "",
//       projectDate: "September 7th, 2022",
//       category: [
//         categories[2]._id,
//         categories[18]._id,
//         categories[3]._id,
//         categories[19]._id,
//         categories[7]._id,
//         categories[4]._id,
//       ],
//     },
//     {
//       projectName: "Work Day Scheduler",
//       projectDescription:
//         "A functional work scheduler using Boostrap 5 to style accordingly and moment.js for current timestamps.",
//       projectImg:
//         "https://github.com/SThevenot/portfolio-v2/blob/main/client/src/project-images/work-scheduler.png?raw=true",
//       projectGithub: "https://github.com/SThevenot/work-scheduler",
//       projectDeploy: "",
//       projectDate: "August 15th, 2022",
//       category: [
//         categories[2]._id,
//         categories[3]._id,
//         categories[20]._id,
//         categories[7]._id,
//         categories[21]._id,
//       ],
//     },
//   ]);
//   console.log("all done!");
//   process.exit(0);
// });
