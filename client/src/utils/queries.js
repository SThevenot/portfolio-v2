import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
  query getProjects {
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