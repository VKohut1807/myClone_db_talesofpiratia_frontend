import monstersApi from "@/api/monsters.js";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const getterTypes = {
  myMonsters: "[monsters] my Monsters",
  myMonstersPerIds: "[monsters ids] my Monsters per ids",
};

const getters = {
  [getterTypes.myMonsters]: (state) => (lfMonsters) => {
    if (state.data === null || state.data.length < 1) {
      return [];
    }
    return state.data.filter((stateMonster) => {
      const lfMonster = lfMonsters.find(
        (monster) => monster.id === stateMonster.id
      );
      if (lfMonster) {
        stateMonster.chance = lfMonster.chance;
        return true;
      }
      return false;
    });
  },
  [getterTypes.myMonstersPerIds]: (state) => (lfMonsters) => {
    if (state.data === null || state.data.length < 1) {
      return [];
    }
    return state.data.filter((stateMonster) => {
      const lfMonster = lfMonsters.find((id) => id === stateMonster.id);
      if (lfMonster) {
        return true;
      }
      return false;
    });
  },
};

export const mutationTypes = {
  getMonstersStart: "[monsters] Get monsters start",
  getMonstersSuccess: "[monsters] Get monsters success",
  getMonstersFailure: "[monsters] Get monsters failure",
};

const mutations = {
  [mutationTypes.getMonstersStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getMonstersSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getMonstersFailure](state) {
    state.isLoading = false;
  },
};

export const actionTypes = {
  getMonsters: "[monsters] Get monsters",
};

const actions = {
  [actionTypes.getMonsters](context, { apiUrl }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getMonstersStart);
      monstersApi
        .getMonsters(apiUrl)
        .then((response) => {
          context.commit(mutationTypes.getMonstersSuccess, response);
          resolve(response);
        })
        .catch(() => {
          context.commit(mutationTypes.getMonstersFailure);
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
