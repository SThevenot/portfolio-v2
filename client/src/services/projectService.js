/** @format */

import axios from "axios";
class ProjectService {
  getProjects() {
    return axios.get(`http://localhost:3001/api/projects/projectsList`, {
      headers: {
        "Access-Control-Allow-Origin": true,
      },
    });
  }
}
export default new ProjectService();
