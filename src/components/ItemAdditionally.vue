<template>
  <v-card>
    <mcdb-loading v-if="isLoading" />
    <mcdb-error-message v-if="error" />
    <mcdb-tabs v-if="dataTableTabs" :data-table-tabs="dataTableTabs" />
  </v-card>
</template>

<script>
import McdbLoading from "@/components/Loading.vue";
import McdbErrorMessage from "@/components/ErrorMessage.vue";
import McdbTabs from "@/components/Tabs.vue";

import { mapState } from "vuex";
import { actionTypes as actionTypesLF } from "@/store/modules/LF_Elements.js";

import {
  headersItemDetails,
  headersInsideStorageItems,
  headersInsideMonstersItems,
  headersContainsElements,
} from "@/helpers/headers/forItems.js";
import { API_URL_ITEMS, API_URL_MONSTERS } from "@/helpers/vars.js";
import { LF_Element } from "@/mixins/LF_ElementMixin.js";

export default {
  name: "McdbItemAdditionally",
  components: {
    McdbLoading,
    McdbErrorMessage,
    McdbTabs,
  },
  props: {
    storageData: {
      type: Array,
      required: true,
    },
    monstersData: {
      type: Array,
      required: true,
    },
    elementsData: {
      type: Array,
      required: true,
    },
  },
  mixins: [LF_Element],
  computed: {
    ...mapState({
      isLoading: (state) => state.LF_Elements.isLoading,
      error: (state) => state.LF_Elements.error,
    }),
    dataTableTabs() {
      return [
        {
          tabName: headersItemDetails.insideMonsters.title,
          headersTable: headersInsideMonstersItems,
          contentTable: this.receivedMonsters,
        },
        {
          tabName: headersItemDetails.insideStorage.title,
          headersTable: headersInsideStorageItems,
          contentTable: this.receivedItems,
        },
        {
          tabName: headersItemDetails.containsElements.title,
          headersTable: headersContainsElements,
          contentTable: this.receivedElements,
        },
      ];
    },
  },
  data() {
    return {
      tabs: null,
      receivedItems: [],
      receivedMonsters: [],
      receivedElements: [],
    };
  },
  created() {
    this.elements(
      this.storageData,
      actionTypesLF.getLF_Elements,
      API_URL_ITEMS,
      this.receivedItems
    );
    this.elements(
      this.monstersData,
      actionTypesLF.getLF_Elements,
      API_URL_MONSTERS,
      this.receivedMonsters
    );
    this.elements(
      this.elementsData,
      actionTypesLF.getLF_Elements,
      API_URL_ITEMS,
      this.receivedElements
    );
  },
};
</script>
