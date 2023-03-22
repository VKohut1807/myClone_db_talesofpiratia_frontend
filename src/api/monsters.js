import axios from "@/api/index.js";

const getMonsters = (apiUrl) => {
  return axios.get(apiUrl).then((response) => {
    return response.data;
  });
};

export default {
  getMonsters,
};
