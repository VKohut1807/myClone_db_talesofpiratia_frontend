<template>
  <v-card class="mx-auto" flat>
    <v-card-title>
      <v-icon left>mdi mdi-account-cowboy-hat</v-icon>
      <h3>Npc</h3>
    </v-card-title>

    <v-card-text>
      <mcdb-loading v-if="isLoading" />
      <mcdb-error-message v-if="error" />
      <mcdb-data-table
        v-if="npcList"
        :headers="headersNpcAll"
        :items="npcList"
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
import { actionTypes } from "@/store/modules/npc.js";

import { headersNpcAll } from "@/helpers/headers/forNpc.js";
import { API_URL_NPC } from "@/helpers/vars.js";

export default {
  name: "McdbNpc",
  components: {
    McdbLoading,
    McdbErrorMessage,
    McdbDataTable,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.npc.isLoading,
      npcList: (state) => state.npc.data,
      error: (state) => state.npc.error,
    }),
    headersNpcAll() {
      return headersNpcAll;
    },
  },
  data() {
    return { itemsPerPage: 15, routerTo: "npcDetails" };
  },
  mounted() {
    this.$store.dispatch(actionTypes.getNpc, { apiUrl: API_URL_NPC });
  },
};
</script>
