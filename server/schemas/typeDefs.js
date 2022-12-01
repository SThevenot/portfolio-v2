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
    technologies: [String]
  }
  type Category {
    _id: ID
    technologies: String
  }

  type Query {
    project(id: ID!): [Project]!
    projectsbytech(category: ID, name: String): [Project]

  }
`;

module.exports = typeDefs;
