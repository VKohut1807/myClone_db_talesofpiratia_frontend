import monsterDetailsApi from "@/api/monsterDetails.js";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getMonsterDetailsStart: "[monster details] Get monster details start",
  getMonsterDetailsSuccess: "[monster details] Get monster details success",
  getMonsterDetailsFailure: "[monster details] Get monster details failure",
};

const mutations = {
  [mutationTypes.getMonsterDetailsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getMonsterDetailsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getMonsterDetailsFailure](state) {
    state.isLoading = false;
  },
};

export const actionTypes = {
  getMonsterDetails: "[monster details] Get monster details",
};

const actions = {
  [actionTypes.getMonsterDetails](context, { slug }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getMonsterDetailsStart);
      monsterDetailsApi
        .getMonsterDetails(slug)
        .then((monster) => {
          context.commit(mutationTypes.getMonsterDetailsSuccess, monster);
          resolve(monster);
        })
        .catch(() => {
          context.commit(() => {
            mutationTypes.getMonsterDetailsFailure;
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
