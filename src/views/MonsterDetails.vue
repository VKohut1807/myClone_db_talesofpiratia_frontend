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
          <mcdb-monster-additionally
            :drop-data="dropData"
            :skill-data="skillData"
          />
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import McdbLoading from "@/components/Loading.vue";
import McdbErrorMessage from "@/components/ErrorMessage.vue";
import McdbMonsterAdditionally from "@/components/MonsterAdditionally.vue";

import { mapState } from "vuex";
import { actionTypes } from "@/store/modules/monsterDetails.js";

import { headersMonsterDetails } from "@/helpers/headers/forMonsters.js";

export default {
  name: "McdbMonsterDetails",
  components: { McdbLoading, McdbErrorMessage, McdbMonsterAdditionally },
  computed: {
    ...mapState({
      isLoading: (state) => state.monsterDetails.isLoading,
      monster: (state) => state.monsterDetails.data,
      error: (state) => state.monsterDetails.error,
    }),
    slugName() {
      return this.$route.params.slug;
    },
    headersMonsterDetails() {
      return headersMonsterDetails;
    },
    skillData() {
      if (!this.monster || this.monster.skills.length < 1) {
        return [];
      }
      return this.monster.skills;
    },
    dropData() {
      if (!this.monster || this.monster.drop.length < 1) {
        return [];
      }
      return this.monster.drop;
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.getMonster();
  },
  methods: {
    getMonster() {
      return this.$store.dispatch(actionTypes.getMonsterDetails, {
        slug: this.slugName,
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
