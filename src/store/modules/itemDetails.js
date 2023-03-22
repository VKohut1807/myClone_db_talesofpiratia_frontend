import itemDetailsApi from "@/api/itemDetails.js";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getItemDetailsStart: "[item details] Get item details start",
  getItemDetailsSuccess: "[item details] Get item details success",
  getItemDetailsFailure: "[item details] Get item details failure",
};

const mutations = {
  [mutationTypes.getItemDetailsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getItemDetailsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getItemDetailsFailure](state) {
    state.isLoading = false;
  },
};

export const actionTypes = {
  getItemDetails: "[item details] Get item details",
};

const actions = {
  [actionTypes.getItemDetails](context, { slug }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getItemDetailsStart);
      itemDetailsApi
        .getItemDetails(slug)
        .then((item) => {
          context.commit(mutationTypes.getItemDetailsSuccess, item);
          resolve(item);
        })
        .catch(() => {
          context.commit(() => {
            mutationTypes.getItemDetailsFailure;
          });
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
