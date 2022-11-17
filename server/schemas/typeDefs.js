const {gql} = require("apollo-server-express");

const typeDefs = gql`
type Project {
    _id: ID
    projectDescription: String
    projectImg: String
    ProjectGithub: String
    projectDeploy: String
    projectDate: String
}

type Query { 
    projects: [Project]
    project(projectId: ID!): Project
}

type Mutation {
    addProject(projectDescription: String!, projectGithub: String!): Project
    removeProject(projectId: ID!): Project
}
`

module.exports = typeDefs