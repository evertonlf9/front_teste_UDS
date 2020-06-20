<template src="./table.html"></template>
<script>
export default {
  name: "Table",
  props: ["cols", "dataSource", "onHandlerEdit"],
  data() {
    return {
      data: this.dataSource,
      columns: this.cols
    };
  },
  computed: {},
  methods: {
    onEdit(item) {
      this.onHandlerEdit(item);
    }
  }
};
</script>
<style scoped lang="scss">
@import "./table.scss";
</style>
