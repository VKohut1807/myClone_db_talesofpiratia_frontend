import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
import LayoutPage from "@/views/layouts/LayoutPage.vue";

import Items from "@/views/Items.vue";
import ItemDetails from "@/views/ItemDetails.vue";

import Monsters from "@/views/Monsters.vue";
import MonsterDetails from "@/views/MonsterDetails.vue";

import Skills from "@/views/Skills.vue";
import SkillDetails from "@/views/SkillDetails.vue";

import Npc from "@/views/Npc.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/items",
    component: LayoutPage,
    children: [
      {
        path: "/",
        name: "items",
        component: Items,
      },
      {
        path: ":slug",
        name: "itemDetails",
        component: ItemDetails,
      },
    ],
  },
  {
    path: "/monsters",
    component: LayoutPage,
    children: [
      {
        path: "/",
        name: "monsters",
        component: Monsters,
      },
      {
        path: ":slug",
        name: "monsterDetails",
        component: MonsterDetails,
      },
    ],
  },
  {
    path: "/skills",
    component: LayoutPage,
    children: [
      {
        path: "/",
        name: "skills",
        component: Skills,
      },
      {
        path: ":slug",
        name: "skillDetails",
        component: SkillDetails,
      },
    ],
  },
  {
    path: "/npc",
    component: LayoutPage,
    children: [
      {
        path: "/",
        name: "npc",
        component: Npc,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
