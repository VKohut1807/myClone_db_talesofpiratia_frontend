<template>
  <v-card class="mx-auto" flat>
    <v-card-title>
      <v-icon left>mdi mdi-elephant</v-icon>
      <h3>Monsters</h3>
    </v-card-title>

    <v-card-text>
      <mcdb-loading v-if="isLoading" />
      <mcdb-error-message v-if="error" />
      <mcdb-data-table
        v-if="monsters"
        :headers="headersMonstersAll"
        :items="monsters"
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
import { actionTypes } from "@/store/modules/monsters.js";

import { headersMonstersAll } from "@/helpers/headers/forMonsters.js";
import { API_URL_MONSTERS } from "@/helpers/vars.js";

export default {
  name: "McdbMonsters",
  components: {
    McdbLoading,
    McdbErrorMessage,
    McdbDataTable,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.monsters.isLoading,
      monsters: (state) => state.monsters.data,
      error: (state) => state.monsters.error,
    }),
    headersMonstersAll() {
      return headersMonstersAll;
    },
  },
  data() {
    return {
      itemsPerPage: 5,
      routerTo: "monsterDetails",
    };
  },
  mounted() {
    this.$store.dispatch(actionTypes.getMonsters, { apiUrl: API_URL_MONSTERS });
  },
};
</script>
