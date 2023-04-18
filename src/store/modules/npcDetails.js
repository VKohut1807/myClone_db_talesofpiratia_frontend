import npcDetailsApi from "@/api/npcDetails.js";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getNpcDetailsStart: "[npc details] Get npc details start",
  getNpcDetailsSuccess: "[npc details] Get npc details success",
  getNpcDetailsFailure: "[npc details] Get npc details failure",
};

const mutations = {
  [mutationTypes.getNpcDetailsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getNpcDetailsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getNpcDetailsFailure](state) {
    state.isLoading = false;
  },
};

export const actionTypes = {
  getNpcDetails: "[npc details] Get npc details",
};

const actions = {
  [actionTypes.getNpcDetails](context, { slug }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getNpcDetailsStart);
      npcDetailsApi
        .getNpcDetails(slug)
        .then((npc) => {
          context.commit(mutationTypes.getNpcDetailsSuccess, npc);
          resolve(npc);
        })
        .catch(() => {
          context.commit(() => {
            mutationTypes.getNpcDetailsFailure;
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
