<template>
  <v-card v-if="dataTableTabs">
    <v-tabs v-model="tabs" background-color="indigo accent-1" icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <template v-for="tab in dataTableTabs">
        <v-tab
          v-if="
            (tab.typeTable === 'dataTable' && tab.contentTable?.length > 0) ||
            (tab.typeTable === 'simpleTable' &&
              tab.contentTableLeft?.length > 0 &&
              tab.contentTableRight?.length > 0)
          "
          :key="tab.tabName"
          exact
        >
          {{ tab.tabName }}
        </v-tab>
      </template>
    </v-tabs>

    <v-tabs-items v-model="tabs">
      <template v-for="tab in dataTableTabs">
        <v-tab-item
          v-if="
            (tab.typeTable === 'dataTable' && tab.contentTable?.length > 0) ||
            (tab.typeTable === 'simpleTable' &&
              tab.contentTableLeft?.length > 0 &&
              tab.contentTableRight?.length > 0)
          "
          :key="tab.tabName"
        >
          <mcdb-data-table
            v-if="tab.typeTable === 'dataTable'"
            :headers="tab.headersTable"
            :items="tab.contentTable"
            :router-to="tab.routerTo"
          />
          <v-row no-gutters v-if="tab.typeTable === 'simpleTable'">
            <v-col cols="6">
              <mcdb-simple-table
                :headers="tab.headersTableLeft"
                :items="tab.contentTableLeft"
                :router-to="tab.routerToLeft"
              />
            </v-col>
            <v-col cols="6">
              <mcdb-simple-table
                :headers="tab.headersTableRight"
                :items="tab.contentTableRight"
                :router-to="tab.routerToRight"
              />
            </v-col>
          </v-row>
        </v-tab-item>
      </template>
    </v-tabs-items>
  </v-card>
</template>

<script>
import McdbDataTable from "@/components/DataTable.vue";
import McdbSimpleTable from "@/components/SimpleTable.vue";

export default {
  name: "McdbTabs",
  components: {
    McdbDataTable,
    McdbSimpleTable,
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
};
</script>
