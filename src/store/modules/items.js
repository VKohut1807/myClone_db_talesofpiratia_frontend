import itemsApi from "@/api/items.js";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getItemsStart: "[items] Get items start",
  getItemsSuccess: "[items] Get items success",
  getItemsFailure: "[items] Get items failure",
};

const mutations = {
  [mutationTypes.getItemsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getItemsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getItemsFailure](state) {
    state.isLoading = false;
  },
};

export const actionTypes = {
  getItems: "[items] Get items",
};

const actions = {
  [actionTypes.getItems](context, { apiUrl }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getItemsStart);
      itemsApi
        .getItems(apiUrl)
        .then((response) => {
          context.commit(mutationTypes.getItemsSuccess, response);
          resolve(response);
        })
        .catch(() => {
          context.commit(mutationTypes.getItemsFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
