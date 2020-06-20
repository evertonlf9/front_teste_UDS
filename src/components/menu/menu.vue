<template src="./menu.html"></template>

<script>
import HomeMixin from "../../core/store/home/store/mixin";

export default {
  name: "Table",
  mixins: [HomeMixin],
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    openMenu() {
      this.ActionMenuOpen();
    },
    onCollapse(collapsed, type) {
      // console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      // console.log(broken);
    }
  }
};
</script>

<style lang="scss">
@import "./menu.scss";
</style>
