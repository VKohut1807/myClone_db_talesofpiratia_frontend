import axios from "@/api/index.js";

const getLF_Elements = (apiUrl, slug) => {
  return axios.get(`${apiUrl}/${slug}`).then((response) => response.data);
};

export default {
  getLF_Elements,
};
