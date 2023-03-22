import axios from "@/api/index.js";
import { API_URL_SKILLS } from "@/helpers/vars.js";

const getSkillDetails = (slug) => {
  return axios
    .get(`${API_URL_SKILLS}/${slug}`)
    .then((response) => response.data);
};

export default {
  getSkillDetails,
};
