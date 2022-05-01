import axios from "axios";

const apiGit = axios.create({
  baseURL: process.env.REACT_APP_GIT_API_URL,
});

export { apiGit };
