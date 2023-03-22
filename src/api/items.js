import axios from "@/api/index.js";

const getItems = (apiUrl) => {
  return axios.get(apiUrl).then((response) => response.data);
};

export default {
  getItems,
};
