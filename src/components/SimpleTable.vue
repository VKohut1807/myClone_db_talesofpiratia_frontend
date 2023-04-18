<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th v-for="(header, idx) in headers" :key="idx" :align="header.align">
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="(header, idx) in headers" :key="idx">
            <template v-if="header.value === 'name'">
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
            <template v-else>
              {{ item[header.value] }}
            </template>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "McdbSimpleTable",
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
