/** @format */

export const getAllProjects = () => {
  return fetch('/api/projects', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};