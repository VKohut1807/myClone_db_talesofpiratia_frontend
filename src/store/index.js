import Vue from "vue";
import Vuex from "vuex";

import items from "@/store/modules/items.js";
import itemDetails from "@/store/modules/itemDetails.js";
import monsters from "@/store/modules/monsters.js";
import monsterDetails from "@/store/modules/monsterDetails.js";
import skillDetails from "@/store/modules/skillDetails.js";
import skills from "@/store/modules/skills.js";
import npc from "@/store/modules/npc.js";
import npcDetails from "@/store/modules/npcDetails.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    items,
    itemDetails,
    monsters,
    monsterDetails,
    skills,
    skillDetails,
    npc,
    npcDetails,
  },
});
