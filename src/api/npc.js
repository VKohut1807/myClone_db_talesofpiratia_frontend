import axios from "@/api/index.js";

const getNpc = (apiUrl) => {
  return axios.get(apiUrl).then((response) => {
    return response.data;
  });
};

export default {
  getNpc,
};
