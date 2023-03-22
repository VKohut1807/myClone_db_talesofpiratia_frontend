export const LF_Element = {
  methods: {
    async elements(data, action, apiUrl, pushTo) {
      return await data.map(async (elemData) => {
        const elem = await this.$store.dispatch(action, {
          apiUrl: apiUrl,
          slug: elemData.id,
        });
        elem.chance = elemData.chance;
        return pushTo.push(elem);
      });
    },
  },
};
