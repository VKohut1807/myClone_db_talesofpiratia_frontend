<template>
  <v-container fluid>
    <mcdb-loading v-if="isLoading" />
    <mcdb-error-message v-if="error" />
    <template v-if="skill">
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
                    <img :src="skill.img" />
                  </v-avatar>
                  <v-toolbar-title>{{ skill.name }}</v-toolbar-title>
                </span>
              </template>
              <span>{{ skill.description }}</span>
            </v-tooltip>
          </v-toolbar>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-row justify-space-around" no-gutters>
        <v-col cols="auto">
          <v-card color="indigo accent-2">
            <v-card-title class="subheading font-weight-bold">
              {{ headersSkillDetails.title }}
            </v-card-title>
            <v-divider></v-divider>
            <v-list three-line color="deep-purple lighten-5">
              <v-list-item>
                <v-list-item-title
                  >{{ headersSkillDetails.information }}:
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ skill.information }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersSkillDetails.effect }}:
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ skill.effect }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  >{{ headersSkillDetails.consumption }}:
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ skill.consumption }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import McdbLoading from "@/components/Loading.vue";
import McdbErrorMessage from "@/components/ErrorMessage.vue";

import { mapState } from "vuex";
import { actionTypes } from "@/store/modules/skillDetails.js";

import { headersSkillDetails } from "@/helpers/headers/forSkills.js";

export default {
  name: "McdbSkillDetails",
  components: { McdbLoading, McdbErrorMessage },
  computed: {
    ...mapState({
      isLoading: (state) => state.skillDetails.isLoading,
      skill: (state) => state.skillDetails.data,
      error: (state) => state.skillDetails.error,
    }),
    headersSkillDetails() {
      return headersSkillDetails;
    },
    slugName() {
      return this.$route.params.slug;
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.getSkill();
  },
  methods: {
    getSkill() {
      return this.$store.dispatch(actionTypes.getSkillDetails, {
        slug: this.slugName,
      });
    },
  },
};
</script>

<style scoped>
.v-list > .v-list-item {
  min-height: 50px;
}
.v-list > .v-list-item,
.v-list-item__title {
  min-width: 115px;
}
.v-tooltip__content {
  padding: 25px 16px;
}
</style>
