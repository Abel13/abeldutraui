import axios from "axios";

const githubApi = axios.create({
  baseURL: process.env.GIT_HUB_URL,
});

export default githubApi;
