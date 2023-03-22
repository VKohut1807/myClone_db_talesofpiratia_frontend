<template>
  <v-app>
    <mcdb-top-bar />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import McdbTopBar from "@/components/TopBar.vue";

export default {
  name: "App",
  components: {
    McdbTopBar,
  },

  data: () => ({
    //
  }),
};
</script>
