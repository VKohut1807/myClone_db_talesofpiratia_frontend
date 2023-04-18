<template>
  <v-container fluid>
    <mcdb-loading v-if="isLoading" />
    <mcdb-error-message v-if="error" />
    <template v-if="item">
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
                    <img :src="item.img" />
                  </v-avatar>
                  <v-toolbar-title>{{ item.name }}</v-toolbar-title>
                </span>
              </template>
              <span>{{ item.description }}</span>
            </v-tooltip>
          </v-toolbar>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-row justify-space-around" no-gutters>
        <v-col cols="4">
          <v-card color="indigo accent-2">
            <v-card-title class="subheading font-weight-bold">
              {{ headersItemDetails.title }}
            </v-card-title>
            <v-divider></v-divider>
            <v-list color="deep-purple lighten-5">
              <v-list-item>
                <v-list-item-title
                  >{{ headersItemDetails.type }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.type }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersItemDetails.level }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.level }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersItemDetails.race }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.race.join(", ") }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersItemDetails.class }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.class.join(", ") }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersItemDetails.price }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.price }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersItemDetails.isTradable }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.isTradable }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersItemDetails.isDroppable }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.isDroppable }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersItemDetails.isDiscard }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.isDiscard }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersItemDetails.isBanked }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.isBanked }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersItemDetails.isDeleted }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.isDeleted }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersItemDetails.stackable }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.stackable }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <v-col v-if="item.bonuses.id" cols="3">
          <v-card color="indigo indigo accent-1">
            <v-card-title class="subheading font-weight-bold">
              {{ headersItemDetails.bonuses.title }}
            </v-card-title>
            <v-divider></v-divider>
            <v-list color="indigo lighten-5">
              <v-list-item>
                <v-list-item-title
                  >{{ headersItemDetails.bonuses.constitution }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.bonuses.constitution }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersItemDetails.bonuses.spirit }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.bonuses.spirit }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item v-if="item.bonuses.minAttack">
                <v-list-item-title
                  >{{ headersItemDetails.bonuses.minAttack }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.bonuses.minAttack.from }}-{{
                    item.bonuses.minAttack.to
                  }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item v-if="item.bonuses.maxAttack">
                <v-list-item-title
                  >{{ headersItemDetails.bonuses.maxAttack }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.bonuses.maxAttack.from }}-{{
                    item.bonuses.maxAttack.to
                  }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item v-if="item.bonuses.spRecovery">
                <v-list-item-title
                  >{{ headersItemDetails.bonuses.spRecovery }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.bonuses.spRecovery.from }}-{{
                    item.bonuses.spRecovery.to
                  }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item v-if="item.bonuses.defense">
                <v-list-item-title
                  >{{ headersItemDetails.bonuses.defense }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.bonuses.defense.from }}-{{ item.bonuses.defense.to }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item v-if="item.bonuses.hitRate">
                <v-list-item-title
                  >{{ headersItemDetails.bonuses.hitRate }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.bonuses.hitRate.from }}-{{ item.bonuses.hitRate.to }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item v-if="item.bonuses.physicalResist">
                <v-list-item-title
                  >{{ headersItemDetails.bonuses.physicalResist }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.bonuses.physicalResist.from }}-{{
                    item.bonuses.physicalResist.to
                  }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item v-if="item.bonuses.dodge">
                <v-list-item-title
                  >{{ headersItemDetails.bonuses.dodge }}:
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.bonuses.dodge.from }}-{{ item.bonuses.dodge.to }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="my-7" no-gutters>
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
import { actionTypes as actionTypesI } from "@/store/modules/itemDetails.js";
import { actionTypes as actionTypesMS } from "@/store/modules/monsters.js";
import { actionTypes as actionTypesIS } from "@/store/modules/items.js";
import { getterTypes as getterTypesMS } from "@/store/modules/monsters.js";
import { getterTypes as getterTypesIS } from "@/store/modules/items.js";

import { headersItemDetails } from "@/helpers/headers/forItems.js";
import {
  headersInsideMonstersItems,
  headersInsideStorageItems,
  headersContainsElements,
} from "@/helpers/headers/forItems.js";
import { API_URL_MONSTERS, API_URL_ITEMS } from "@/helpers/vars.js";

export default {
  name: "McdbItemDetails",
  components: { McdbLoading, McdbErrorMessage, McdbTabs },
  computed: {
    ...mapState({
      isLoading: (state) => state.itemDetails.isLoading,
      item: (state) => state.itemDetails.data,
      error: (state) => state.itemDetails.error,
    }),
    ...mapGetters({
      myMonsters: getterTypesMS.myMonsters,
      myItems: getterTypesIS.myItems,
    }),

    headersItemDetails() {
      return headersItemDetails;
    },
    slugName() {
      return this.$route.params.slug;
    },
    monstersData() {
      if (!this.item || this.item.insideMonsters.length < 1) {
        return [];
      }
      return this.item.insideMonsters;
    },
    storageData() {
      if (!this.item || this.item.insideStorage.length < 1) {
        return [];
      }
      return this.item.insideStorage;
    },
    elementsData() {
      if (!this.item || this.item.containsElements.length < 1) {
        return [];
      }
      return this.item.containsElements;
    },
    receivedMonsters() {
      return this.myMonsters(this.monstersData);
    },
    receivedItems() {
      return this.myItems(this.storageData);
    },
    receivedElements() {
      return this.myItems(this.elementsData);
    },
    dataTableTabs() {
      return [
        {
          typeTable: "dataTable",
          tabName: headersItemDetails.insideMonsters.title,
          headersTable: headersInsideMonstersItems,
          contentTable: this.receivedMonsters,
          routerTo: "monsterDetails",
        },
        {
          typeTable: "dataTable",
          tabName: headersItemDetails.insideStorage.title,
          headersTable: headersInsideStorageItems,
          contentTable: this.receivedItems,
          routerTo: "itemDetails",
        },
        {
          typeTable: "dataTable",
          tabName: headersItemDetails.containsElements.title,
          headersTable: headersContainsElements,
          contentTable: this.receivedElements,
          routerTo: "itemDetails",
        },
      ];
    },
  },
  watch: {
    slugName() {
      this.getItem();
    },
  },
  data() {
    return {};
  },
  created() {
    this.getMonsters();
    this.getItems();
  },
  mounted() {
    this.getItem();
  },
  methods: {
    getItem() {
      return this.$store.dispatch(actionTypesI.getItemDetails, {
        slug: this.slugName,
      });
    },
    getMonsters() {
      return this.$store.dispatch(actionTypesMS.getMonsters, {
        apiUrl: API_URL_MONSTERS,
      });
    },
    getItems() {
      return this.$store.dispatch(actionTypesIS.getItems, {
        apiUrl: API_URL_ITEMS,
      });
    },
  },
};
</script>

<style scoped>
.v-list > .v-list-item {
  min-height: 35px;
}
.v-tooltip__content {
  padding: 25px 16px;
}
</style>
