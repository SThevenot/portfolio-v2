/** @format */

import { gql } from "@apollo/client";

export const QUERY_PROJECTS = gql`
  query allProjects {
    projects {
      _id
      projectName
      projectDescription
      projectImg
      projectGithub
      projectDeploy
      projectDate
      category
    }
  }
`;

export const QUERY_PROJECTSREACT = gql`
  query reactProjects {
    projectsReact{
      _id
      projectName
      projectDescription
      projectImg
      projectGithub
      projectDeploy
      projectDate
      category
    }
  }
`;
