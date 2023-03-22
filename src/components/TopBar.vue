<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height flex-row">
      <router-link :to="{ name: 'home' }">
        <v-avatar size="60">
          <v-img src="@/assets/logo_transformed.png"></v-img>
        </v-avatar>
      </router-link>
      <v-spacer></v-spacer>
      <span>
        <v-tabs align-with-title color="indigo darken-3">
          <v-tab
            v-for="tab in activeTab"
            :key="tab.name"
            v-bind="tab"
            class="px-0 mx-3"
            exact
          >
            <v-icon left>{{ tab.icon }}</v-icon>
            <h5>
              {{ tab.title }}
            </h5>
          </v-tab>
        </v-tabs>
      </span>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "McdbTopBar",
  computed: {
    activeTab() {
      return [...this.tabList.isForAll];
    },
  },
  data() {
    return {
      value: "home",
      tabList: {
        isForAll: [
          {
            name: "home",
            title: "home",
            icon: "mdi mdi-home-city",
            to: { name: "home" },
          },
          {
            name: "items",
            title: "items",
            icon: "mdi mdi-guitar-electric",
            to: { name: "items" },
          },
          {
            name: "monsters",
            title: "monsters",
            icon: "mdi mdi-elephant",
            to: { name: "monsters" },
          },
          {
            name: "skills",
            title: "skills",
            icon: "mdi mdi-bat",
            to: { name: "skills" },
          },
          {
            name: "npc",
            title: "npc",
            icon: "mdi mdi-account-cowboy-hat",
            to: { name: "npc" },
          },
        ],
        isLoggedIn: [],
        isAnonymous: [],
      },
    };
  },
};
</script>
