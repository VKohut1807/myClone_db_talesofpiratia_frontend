import axios from "@/api/index.js";
import { API_URL_ITEMS } from "@/helpers/vars.js";

const getItemDetails = (slug) => {
  return axios
    .get(`${API_URL_ITEMS}/${slug}`)
    .then((response) => response.data);
};

export default {
  getItemDetails,
};
