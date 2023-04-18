<template>
  <v-container fluid>
    <mcdb-loading v-if="isLoading" />
    <mcdb-error-message v-if="error" />
    <template v-if="npc">
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
            <v-toolbar-title>{{ npc.name }}</v-toolbar-title>
          </v-toolbar>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-row justify-space-around" no-gutters>
        <v-col cols="8">
          <v-card color="indigo accent-2">
            <v-card-title class="subheading font-weight-bold">
              {{ headersNpcDetails.title }}
            </v-card-title>
            <v-divider></v-divider>
            <v-row class="d-flex flex-row justify-center" no-gutters>
              <v-col cols="6">
                <v-img
                  height="505.99"
                  :src="npc.img"
                  class="grey darken-4"
                ></v-img>
              </v-col>
              <v-col cols="6">
                <v-list color="deep-purple lighten-5">
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.greaterHeal }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.greaterHeal }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.teleporter }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.teleporter }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.banker }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.banker }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.blacksmith }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.blacksmith }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.buildShip }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.buildShip }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.repairShip }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.repairShip }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.supplyShip }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.supplyShip }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.salvageShip }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.salvageShip }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.jobPromotion }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.jobPromotion }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.providesMissions }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.providesMissions }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.cargoTrade }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.cargoTrade }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.loadProductsUpShip }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.loadProductsUpShip }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.area }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.area }}
                    </v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >{{ headersNpcDetails.coordinates }}:
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right">
                      {{ npc.coordinates.x }}-{{ npc.coordinates.y }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
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
import { actionTypes as actionTypesN } from "@/store/modules/npcDetails.js";
import { actionTypes as actionTypesIS } from "@/store/modules/items.js";
import { getterTypes as getterTypesIS } from "@/store/modules/items.js";

import { headersNpcDetails } from "@/helpers/headers/forNpc.js";
import {
  headersForTradeItems,
  headersForExchangeInItems,
  headersForExchangeOutItems,
} from "@/helpers/headers/forNpc.js";
import { API_URL_ITEMS } from "@/helpers/vars.js";
export default {
  name: "McdbNpcDetails",
  components: {
    McdbLoading,
    McdbErrorMessage,
    McdbTabs,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.npcDetails.isLoading,
      npc: (state) => state.npcDetails.data,
      error: (state) => state.npcDetails.error,
    }),
    ...mapGetters({
      myItemsPerIds: getterTypesIS.myItemsPerIds,
      myItems: getterTypesIS.myItems,
    }),
    headersNpcDetails() {
      return headersNpcDetails;
    },
    slugName() {
      return this.$route.params.slug;
    },
    tradeData() {
      if (!this.npc || this.npc.trade.length < 1) {
        return [];
      }
      return this.npc.trade;
    },
    exInData() {
      if (!this.npc || this.npc.exchangeIn.length < 1) {
        return [];
      }
      return this.npc.exchangeIn;
    },
    exOutData() {
      if (!this.npc || this.npc.exchangeOut.length < 1) {
        return [];
      }
      return this.npc.exchangeOut;
    },
    receivedItemsTrade() {
      return this.myItemsPerIds(this.tradeData);
    },
    receivedItemsExIn() {
      return this.myItems(this.exInData);
    },
    receivedItemsExOut() {
      return this.myItems(this.exOutData);
    },
    dataTableTabs() {
      return [
        {
          typeTable: "dataTable",
          tabName: headersNpcDetails.trade.title,
          headersTable: headersForTradeItems,
          contentTable: this.receivedItemsTrade,
          routerTo: "itemDetails",
        },
        {
          typeTable: "simpleTable",
          tabName: headersNpcDetails.exchange.title,
          headersTableLeft: headersForExchangeInItems,
          headersTableRight: headersForExchangeOutItems,
          contentTableLeft: this.receivedItemsExIn,
          contentTableRight: this.receivedItemsExOut,
          routerToLeft: "itemDetails",
          routerToRight: "itemDetails",
        },
      ];
    },
  },
  data() {
    return {};
  },
  created() {
    this.getItems();
  },
  mounted() {
    this.getNpc();
  },
  methods: {
    getNpc() {
      return this.$store.dispatch(actionTypesN.getNpcDetails, {
        slug: this.slugName,
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
</style>
