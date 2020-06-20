<template>
  <div style="width: 100%; display: flex;">

    <a-button class="btn-mobile-menu" @click="openMenu">
      <a-icon type="menu" />
    </a-button>

    <div class="logo-banner"></div>
    <div class="logo-acai"></div>
  </div>
</template>

<script>
import HomeMixin from "../../core/store/home/store/mixin";

export default {
  name: "Header",
  mixins: [HomeMixin],
  methods: {
    openMenu() {
      this.ActionMenuOpen();
    }
  }
}
</script>

<style lang="scss">
  .btn-mobile-menu {
    top: 1rem;
    margin-left: 1rem;
    display: none !important;
  }
  .logo-acai {
    height: 55px;
    margin: 5px;
    background: url('../../assets/img/tigela.png') no-repeat;
    background-size: contain;
    right: 2rem;
    width: 112px;
  }  
</style>
