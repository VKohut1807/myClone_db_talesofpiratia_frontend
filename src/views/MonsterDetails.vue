<template>
  <v-container fluid>
    <mcdb-loading v-if="isLoading" />
    <mcdb-error-message v-if="error" />
    <template v-if="monster">
      <v-row no-gutters>
        <v-col cols="12">
          <v-toolbar
            flat
            class="d-flex justify-center mb-7"
            color="indigo darken-1"
            dark
            elevation="24"
            shaped
          >
            <v-toolbar-title>{{ monster.name }}</v-toolbar-title>
          </v-toolbar>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-row justify-space-around" no-gutters>
        <v-col cols="12">
          <v-card color="indigo accent-2">
            <v-card-title class="subheading font-weight-bold">
              {{ headersMonsterDetails.title }}
            </v-card-title>
            <v-divider></v-divider>
            <v-row class="d-flex flex-row justify-space-around" no-gutters>
              <v-col cols="4">
                <v-img
                  height="400.99"
                  :src="monster.img"
                  class="grey darken-4"
                ></v-img>
              </v-col>
              <v-col cols="4">
                <v-list color="deep-purple lighten-5">
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.level }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.level }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.healthPoints }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.healthPoints }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.damage }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.damage.from }}-{{ monster.damage.to }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.defense }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.defense }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.flee }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.flee }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.hpRecovery }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.hpRecovery }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.radiusOfTheReview }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.radiusOfTheReview }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.radiusOfTheProsecution }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.radiusOfTheProsecution }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.strength }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.strength }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.accuracy }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.accuracy }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.stamina }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.stamina }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="4">
                <v-list color="deep-purple lighten-5">
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.attacks }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.attacks }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.spiritPoints }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.spiritPoints }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.physicalResist }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.physicalResist }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.hitRate }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.hitRate }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.critRate }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.critRate }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.spRecovery }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.spRecovery }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.attackSpeed }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.attackSpeed }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.movementSpeed }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.movementSpeed }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.agility }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.agility }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.constitution }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.constitution }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersMonsterDetails.experience }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ monster.experience }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters class="my-7">
        <v-col cols="12">
          <mcdb-tabs :dataTableTabs="dataTableTabs" />
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
import { actionTypes as actionTypesM } from "@/store/modules/monsterDetails.js";
import { actionTypes as actionTypesIS } from "@/store/modules/items.js";
import { actionTypes as actionTypesSS } from "@/store/modules/skills.js";
import { getterTypes as getterTypesIS } from "@/store/modules/items.js";
import { getterTypes as getterTypesSS } from "@/store/modules/skills.js";

import {
  headersMonsterDetails,
  headersMonsterDrop,
  headersMonsterSkills,
} from "@/helpers/headers/forMonsters.js";
import { API_URL_ITEMS, API_URL_SKILLS } from "@/helpers/vars.js";
export default {
  name: "McdbMonsterDetails",
  components: {
    McdbLoading,
    McdbErrorMessage,
    McdbTabs,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.monsterDetails.isLoading,
      monster: (state) => state.monsterDetails.data,
      error: (state) => state.monsterDetails.error,
    }),
    ...mapGetters({
      myDrop: getterTypesIS.myItems,
      mySkills: getterTypesSS.mySkills,
    }),
    slugName() {
      return this.$route.params.slug;
    },
    headersMonsterDetails() {
      return headersMonsterDetails;
    },
    dropData() {
      if (!this.monster || this.monster.drop.length < 1) {
        return [];
      }
      return this.monster.drop;
    },
    skillsData() {
      if (!this.monster || this.monster.skills.length < 1) {
        return [];
      }
      return this.monster.skills;
    },
    receivedDrop() {
      return this.myDrop(this.dropData);
    },
    receivedSkills() {
      return this.mySkills(this.skillsData);
    },
    dataTableTabs() {
      return [
        {
          typeTable: "dataTable",
          tabName: headersMonsterDetails.drop.title,
          headersTable: headersMonsterDrop,
          contentTable: this.receivedDrop,
          routerTo: "itemDetails",
        },
        {
          typeTable: "dataTable",
          tabName: headersMonsterDetails.skills.title,
          headersTable: headersMonsterSkills,
          contentTable: this.receivedSkills,
          routerTo: "skillDetails",
        },
      ];
    },
  },
  data() {
    return {};
  },
  created() {
    this.getDrop();
    this.getSkills();
  },
  mounted() {
    this.getMonster();
  },
  methods: {
    getMonster() {
      return this.$store.dispatch(actionTypesM.getMonsterDetails, {
        slug: this.slugName,
      });
    },
    getDrop() {
      return this.$store.dispatch(actionTypesIS.getItems, {
        apiUrl: API_URL_ITEMS,
      });
    },
    getSkills() {
      return this.$store.dispatch(actionTypesSS.getSkills, {
        apiUrl: API_URL_SKILLS,
      });
    },
  },
};
</script>

<style scoped>
.v-list > .v-list-item {
  min-height: 35px;
}
</style>
