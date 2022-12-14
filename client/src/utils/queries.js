/** @format */

import { gql } from "@apollo/client";

export const QUERY_PROJECTS = gql`
  {
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
  {
    skills {
      _id
      frontendSkills
      backendSkills
    }
  }
`;
