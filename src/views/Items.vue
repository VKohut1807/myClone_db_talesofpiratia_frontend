<template>
  <v-card class="mx-auto" flat>
    <v-card-title>
      <v-icon left>mdi mdi-guitar-electric</v-icon>
      <h3>Items</h3>
    </v-card-title>

    <v-card-text>
      <mcdb-loading v-if="isLoading" />
      <mcdb-error-message v-if="error" />
      <mcdb-data-table
        v-if="items"
        :headers="headersItemsAll"
        :items="items"
        :items-per-page="itemsPerPage"
        :router-to="routerTo"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import McdbLoading from "@/components/Loading.vue";
import McdbErrorMessage from "@/components/ErrorMessage.vue";
import McdbDataTable from "@/components/DataTable.vue";

import { mapState } from "vuex";
import { actionTypes } from "@/store/modules/items.js";

import { headersItemsAll } from "@/helpers/headers/forItems.js";
import { API_URL_ITEMS } from "@/helpers/vars.js";

export default {
  name: "McdbItems",
  components: {
    McdbLoading,
    McdbErrorMessage,
    McdbDataTable,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.items.isLoading,
      items: (state) => state.items.data,
      error: (state) => state.items.error,
    }),
    headersItemsAll() {
      return headersItemsAll;
    },
  },
  data() {
    return { itemsPerPage: 5, routerTo: "itemDetails" };
  },
  mounted() {
    this.$store.dispatch(actionTypes.getItems, { apiUrl: API_URL_ITEMS });
  },
};
</script>
