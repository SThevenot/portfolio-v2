/** @format */

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/api/projects",
  headers: {
    "Content-type": "application/json",
  },
});
