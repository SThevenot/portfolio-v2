/** @format */

const { gql } = require('apollo-server-express');

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

  type Skill {
    frontendSkills: [String]!
    backendSkills: [String]!
  }

  type Query {
    projects: [Project]!
    skills: [Skill]!
  }
`;

module.exports = typeDefs;
