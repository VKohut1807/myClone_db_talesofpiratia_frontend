<template>
  <div class="pa-4">{{ message }}</div>
</template>
<script>
export default {
  name: "McdbErrorMessage",
  components: {},
  props: {
    message: {
      type: String,
      required: false,
      default: "Something bad happened",
    },
  },
  computed: {},
  data: () => ({}),
};
</script>
