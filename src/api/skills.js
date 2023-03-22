import axios from "@/api/index.js";

const getSkills = (apiUrl) => {
  return axios.get(apiUrl).then((response) => {
    return response.data;
  });
};

export default {
  getSkills,
};
