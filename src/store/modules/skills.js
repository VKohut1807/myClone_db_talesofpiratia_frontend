import skillsApi from "@/api/skills.js";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getSkillsStart: "[skills] Get skills start",
  getSkillsSuccess: "[skills] Get skills success",
  getSkillsFailure: "[skills] Get skills failure",
};

const mutations = {
  [mutationTypes.getSkillsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getSkillsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getSkillsFailure](state) {
    state.isLoading = false;
  },
};

export const actionTypes = {
  getSkills: "[skills] Get skills",
};

const actions = {
  [actionTypes.getSkills](context, { apiUrl }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getSkillsStart);
      skillsApi
        .getSkills(apiUrl)
        .then((response) => {
          context.commit(mutationTypes.getSkillsSuccess, response);
          resolve(response);
        })
        .catch(() => {
          context.commit(mutationTypes.getSkillsFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
