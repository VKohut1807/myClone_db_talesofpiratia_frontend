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

import { API_URL_ITEMS, API_URL_SKILLS } from "@/helpers/vars.js";
import { LF_Element } from "@/mixins/LF_ElementMixin.js";

import {
  headersMonsterDetails,
  headersMonsterSkills,
  headersMonsterDrop,
} from "@/helpers/headers/forMonsters.js";

export default {
  name: "McdbMonsterAdditionally",
  components: {
    McdbLoading,
    McdbErrorMessage,
    McdbTabs,
  },
  props: {
    dropData: {
      type: Array,
      required: true,
    },
    skillData: {
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
          tabName: headersMonsterDetails.drop.title,
          headersTable: headersMonsterDrop,
          contentTable: this.receivedItems,
        },
        {
          tabName: headersMonsterDetails.skills.title,
          headersTable: headersMonsterSkills,
          contentTable: this.receivedSkills,
        },
      ];
    },
  },
  data() {
    return {
      tabs: null,
      receivedItems: [],
      receivedSkills: [],
    };
  },
  created() {
    this.elements(
      this.dropData,
      actionTypesLF.getLF_Elements,
      API_URL_ITEMS,
      this.receivedItems
    );
    this.elements(
      this.skillData,
      actionTypesLF.getLF_Elements,
      API_URL_SKILLS,
      this.receivedSkills
    );
  },
  methods: {},
};
</script>
