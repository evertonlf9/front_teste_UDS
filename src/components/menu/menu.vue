<template src="./menu.html"></template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      // console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      // console.log(broken);
    },
  },
};
</script>

<style lang="scss">
@import './menu.scss'
</style>
