<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :sort-by="['id']"
    :items-per-page="itemsPerPage"
    class="elevation-1"
    dense
  >
    <template #item.name="{ item }">
      <v-btn
        :to="{ name: routerTo, params: { slug: item.id } }"
        plain
        color="indigo-darken-4"
        class="font-weight-medium text-lowercase"
      >
        <v-avatar size="35" rounded="0" class="mr-3">
          <img :src="item.img" />
        </v-avatar>
        <span>
          {{ item.name }}
        </span>
      </v-btn>
    </template>
    <template #item.type="{ item }">
      <router-link :to="{ name: 'home' }">
        {{ item.type }}
      </router-link>
    </template>
    <template #item.area="{ item }">
      <router-link
        v-for="(space, idx) in item.area"
        :key="idx"
        :to="{ name: 'home' }"
      >
        <span class="px-1">{{ space }}</span>
      </router-link>
    </template>
    <template #item.coordinates="{ item }">
      <router-link :to="{ name: 'home' }">
        {{ item.coordinates.x }}-{{ item.coordinates.y }}
      </router-link>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "McdbDataTable",
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    routerTo: {
      type: String,
      required: true,
    },
  },
};
</script>
