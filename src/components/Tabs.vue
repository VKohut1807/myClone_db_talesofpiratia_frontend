<template>
  <v-card v-if="dataTableTabs">
    <v-tabs v-model="tabs" background-color="indigo accent-1" icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab v-for="tab in dataTableTabs" :key="tab.tabName" exact>
        {{ tab.contentTable.length > 0 ? tab.tabName : null }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item v-for="tab in dataTableTabs" :key="tab.tabName">
        <mcdb-data-table
          v-if="tab.contentTable.length > 0"
          :headers="tab.headersTable"
          :items="tab.contentTable"
          router-to="home"
        />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import McdbDataTable from "@/components/DataTable.vue";

export default {
  name: "McdbTabs",
  components: {
    McdbDataTable,
  },
  props: {
    dataTableTabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tabs: null,
    };
  },
  mounted() {},
  methods: {},
};
</script>
