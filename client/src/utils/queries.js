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

export const QUERY_FILTER = gql`
  query getFilterProjects($category: String!) {
    filterProjects(category: $category){
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
