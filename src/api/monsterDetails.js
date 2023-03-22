import axios from "@/api/index.js";
import { API_URL_MONSTERS } from "@/helpers/vars.js";

const getMonsterDetails = (slug) => {
  return axios
    .get(`${API_URL_MONSTERS}/${slug}`)
    .then((response) => response.data);
};

export default {
  getMonsterDetails,
};
