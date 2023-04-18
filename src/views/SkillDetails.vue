<template>
  <v-container fluid>
    <mcdb-loading v-if="isLoading" />
    <mcdb-error-message v-if="error" />
    <template v-if="skill">
      <v-row no-gutters>
        <v-col cols="12">
          <v-toolbar
            shaped
            flat
            class="d-flex justify-center mb-7"
            color="indigo darken-1"
            dark
            elevation="24"
          >
            <v-tooltip bottom color="deep-orange">
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on" class="d-flex align-center">
                  <v-avatar size="45" class="mr-3">
                    <img :src="skill.img" />
                  </v-avatar>
                  <v-toolbar-title>{{ skill.name }}</v-toolbar-title>
                </span>
              </template>
              <span>{{ skill.description }}</span>
            </v-tooltip>
          </v-toolbar>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-row justify-space-around" no-gutters>
        <v-col cols="auto">
          <v-card color="indigo accent-2">
            <v-card-title class="subheading font-weight-bold">
              {{ headersSkillDetails.title }}
            </v-card-title>
            <v-divider></v-divider>
            <v-list three-line color="deep-purple lighten-5">
              <v-list-item>
                <v-list-item-title
                  >{{ headersSkillDetails.information }}:
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ skill.information }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersSkillDetails.effect }}:
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ skill.effect }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersSkillDetails.consumption }}:
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ skill.consumption }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersSkillDetails.usedBy }}:
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ skill.usedBy }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="my-7" no-gutters>
        <v-col cols="12">
          <mcdb-tabs :data-table-tabs="dataTableTabs" />
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import McdbLoading from "@/components/Loading.vue";
import McdbErrorMessage from "@/components/ErrorMessage.vue";
import McdbTabs from "@/components/Tabs.vue";

import { mapState, mapGetters } from "vuex";
import { actionTypes } from "@/store/modules/skillDetails.js";
import { actionTypes as actionTypesNL } from "@/store/modules/npc.js";
import { actionTypes as actionTypesIS } from "@/store/modules/items.js";
import { actionTypes as actionTypesMS } from "@/store/modules/monsters.js";
import { getterTypes as getterTypesSS } from "@/store/modules/npc.js";
import { getterTypes as getterTypesIS } from "@/store/modules/items.js";
import { getterTypes as getterTypesMS } from "@/store/modules/monsters.js";

import { headersSkillDetails } from "@/helpers/headers/forSkills.js";
import {
  headersForBoughtSkills,
  headersForItemSkills,
  headersForMonsterSkills,
} from "@/helpers/headers/forSkills.js";
import {
  API_URL_NPC,
  API_URL_ITEMS,
  API_URL_MONSTERS,
} from "@/helpers/vars.js";
export default {
  name: "McdbSkillDetails",
  components: { McdbLoading, McdbErrorMessage, McdbTabs },
  computed: {
    ...mapState({
      isLoading: (state) => state.skillDetails.isLoading,
      skill: (state) => state.skillDetails.data,
      error: (state) => state.skillDetails.error,
    }),
    ...mapGetters({
      myNpcPerIds: getterTypesSS.myNpcPerIds,
      myItemsPerIds: getterTypesIS.myItemsPerIds,
      myMonstersPerIds: getterTypesMS.myMonstersPerIds,
    }),
    headersSkillDetails() {
      return headersSkillDetails;
    },
    slugName() {
      return this.$route.params.slug;
    },
    npcData() {
      if (!this.skill || this.skill.buyFrom.length < 1) {
        return [];
      }
      return this.skill.buyFrom;
    },
    itemsData() {
      if (!this.skill || this.skill.usedItems.length < 1) {
        return [];
      }
      return this.skill.usedItems;
    },
    monstersData() {
      if (!this.skill || this.skill.usedMonsters.length < 1) {
        return [];
      }
      return this.skill.usedMonsters;
    },
    receivedNpc() {
      return this.myNpcPerIds(this.npcData);
    },
    receivedItems() {
      return this.myItemsPerIds(this.itemsData);
    },
    receivedMonsters() {
      return this.myMonstersPerIds(this.monstersData);
    },
    dataTableTabs() {
      return [
        {
          typeTable: "dataTable",
          tabName: headersSkillDetails.buyFrom.title,
          headersTable: headersForBoughtSkills,
          contentTable: this.receivedNpc,
          routerTo: "npcDetails",
        },
        {
          typeTable: "dataTable",
          tabName: headersSkillDetails.usedItem.title,
          headersTable: headersForItemSkills,
          contentTable: this.receivedItems,
          routerTo: "itemDetails",
        },
        {
          typeTable: "dataTable",
          tabName: headersSkillDetails.usedMonster.title,
          headersTable: headersForMonsterSkills,
          contentTable: this.receivedMonsters,
          routerTo: "monsterDetails",
        },
      ];
    },
  },
  data() {
    return {};
  },
  created() {
    this.getNpc();
    this.getItems();
    this.getMonsters();
  },
  mounted() {
    this.getSkill();
  },
  methods: {
    getSkill() {
      return this.$store.dispatch(actionTypes.getSkillDetails, {
        slug: this.slugName,
      });
    },
    getNpc() {
      return this.$store.dispatch(actionTypesNL.getNpc, {
        apiUrl: API_URL_NPC,
      });
    },
    getItems() {
      return this.$store.dispatch(actionTypesIS.getItems, {
        apiUrl: API_URL_ITEMS,
      });
    },
    getMonsters() {
      return this.$store.dispatch(actionTypesMS.getMonsters, {
        apiUrl: API_URL_MONSTERS,
      });
    },
  },
};
</script>

<style scoped>
.v-list > .v-list-item {
  min-height: 50px;
}
.v-list > .v-list-item,
.v-list-item__title {
  min-width: 115px;
}
.v-tooltip__content {
  padding: 25px 16px;
}
</style>
