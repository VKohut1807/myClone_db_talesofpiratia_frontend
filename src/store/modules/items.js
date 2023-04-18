import itemsApi from "@/api/items.js";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const getterTypes = {
  myItems: "[items] my Items",
  myItemsPerIds: "[items ids] my Items per ids",
};

const getters = {
  [getterTypes.myItems]: (state) => (lfItems) => {
    if (state.data === null || state.data.length < 1) {
      return [];
    }
    return state.data.filter((stateItem) => {
      const lfItem = lfItems.find((item) => item.id === stateItem.id);
      if (lfItem && lfItem.chance) {
        stateItem.chance = lfItem.chance;
        return true;
      } else if (lfItem && lfItem.amount) {
        stateItem.amount = lfItem.amount;
        return true;
      }
      return false;
    });
  },
  [getterTypes.myItemsPerIds]: (state) => (lfItems) => {
    if (state.data === null || state.data.length < 1) {
      return [];
    }
    return state.data.filter((stateItem) => {
      const lfItem = lfItems.find((id) => id === stateItem.id);
      if (lfItem) {
        stateItem.price *= 2;
        return true;
      }
      return false;
    });
  },
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
  getters,
  actions,
  mutations,
};
