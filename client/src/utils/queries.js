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
    }
  }
`;
