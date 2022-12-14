/** @format */

import { gql } from "@apollo/client";

export const QUERY_PROJECTS = gql`
  query allprojects {
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

export const QUERY_SKILLS = gql`
  query allskills {
    skills {
      _id
      frontendSkills
      backendSkills
    }
  }
`;
