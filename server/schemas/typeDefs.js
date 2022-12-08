/** @format */

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Project {
    _id: ID
    projectName: String!
    projectDescription: String!
    projectImg: String!
    projectGithub: String!
    projectDeploy: String
    projectDate: String!
    category: [String]!
  }

  type Query {
    projects: [Project]!
    projectsReact: [Project]!
  }
`;

module.exports = typeDefs;
