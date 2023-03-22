import skillDetailsApi from "@/api/skillDetails.js";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getSkillDetailsStart: "[skill details] Get skill details start",
  getSkillDetailsSuccess: "[skill details] Get skill details success",
  getSkillDetailsFailure: "[skill details] Get skill details failure",
};

const mutations = {
  [mutationTypes.getSkillDetailsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getSkillDetailsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getSkillDetailsFailure](state) {
    state.isLoading = false;
  },
};

export const actionTypes = {
  getSkillDetails: "[skill details] Get skill details",
};

const actions = {
  [actionTypes.getSkillDetails](context, { slug }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getSkillDetailsStart);
      skillDetailsApi
        .getSkillDetails(slug)
        .then((skill) => {
          context.commit(mutationTypes.getSkillDetailsSuccess, skill);
          resolve(skill);
        })
        .catch(() => {
          context.commit(() => {
            mutationTypes.getSkillDetailsFailure;
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
