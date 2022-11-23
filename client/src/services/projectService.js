/** @format */

import http from "../http-common";

class ProjectDataService {
  getAll() {
    return http.get("/api/projects/projectsList");
  }
}

export default new ProjectDataService();