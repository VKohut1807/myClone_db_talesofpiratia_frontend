import LF_ElementsApi from "@/api/LF_Elements";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getLF_ElementsStart: "[LF_elements] Get LF_elements start",
  getLF_ElementsSuccess: "[LF_elements] Get LF_elements success",
  getLF_ElementsFailure: "[LF_elements] Get LF_elements failure",
};

const mutations = {
  [mutationTypes.getLF_ElementsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getLF_ElementsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getLF_ElementsFailure](state) {
    state.isLoading = false;
  },
};

export const actionTypes = {
  getLF_Elements: "[LF_elements] Get LF_elements",
};

const actions = {
  [actionTypes.getLF_Elements](context, { apiUrl, slug }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getLF_ElementsStart);
      LF_ElementsApi.getLF_Elements(apiUrl, slug)
        .then((element) => {
          context.commit(mutationTypes.getLF_ElementsSuccess, element);
          resolve(element);
        })
        .catch(() => {
          context.commit(mutationTypes.getLF_ElementsFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
