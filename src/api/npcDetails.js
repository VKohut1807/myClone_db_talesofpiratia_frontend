import axios from "@/api/index.js";
import { API_URL_NPC } from "@/helpers/vars.js";

const getNpcDetails = (slug) => {
  return axios.get(`${API_URL_NPC}/${slug}`).then((response) => response.data);
};

export default {
  getNpcDetails,
};
