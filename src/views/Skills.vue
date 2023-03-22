<template>
  <v-card class="mx-auto" flat>
    <v-card-title>
      <v-icon left>mdi mdi-bat</v-icon>
      <h3>Skills</h3>
    </v-card-title>

    <v-card-text>
      <mcdb-loading v-if="isLoading" />
      <mcdb-error-message v-if="error" />
      <mcdb-data-table
        v-if="skills"
        :headers="headersSkillsAll"
        :items="skills"
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
import { actionTypes } from "@/store/modules/skills.js";

import { headersSkillsAll } from "@/helpers/headers/forSkills.js";
import { API_URL_SKILLS } from "@/helpers/vars.js";

export default {
  name: "McdbSkills",
  components: {
    McdbLoading,
    McdbErrorMessage,
    McdbDataTable,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.skills.isLoading,
      skills: (state) => state.skills.data,
      error: (state) => state.skills.error,
    }),
    headersSkillsAll() {
      return headersSkillsAll;
    },
  },
  data() {
    return { itemsPerPage: 15, routerTo: "skillDetails" };
  },
  mounted() {
    this.$store.dispatch(actionTypes.getSkills, { apiUrl: API_URL_SKILLS });
  },
};
</script>
