<template>
  <div id="app">
    <div class="alert" v-if="getAlertShow">
      <a-alert
        close-text="Fechar"
        message="Pedido realizado com sucesso"
        description="Obrigado pela preferência."
        type="success"
        show-icon
        closable
        @close="onClose"
      />
    </div>
    <a-layout id="components-layout-demo-responsive">
      <Menu />
      <a-layout>
        <a-layout-header
          :style="{
            background: 'rgba(88, 27, 76, 0.16)',
            padding: 0,
            display: 'flex'
          }"
        >
          <Header />
        </a-layout-header>
        <a-layout-content>
          <router-view />
        </a-layout-content>
        <a-layout-footer style="textAlign: center">
          Açai ©2020 Created by Everton
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import HomeMixin from "./core/store/home/store/mixin";
import Header from "./components/header/header";
import Menu from "./components/menu/menu.vue";

export default {
  name: "App",
  mixins: [HomeMixin],
  components: {
    Header,
    Menu
  },
  methods: {
    onClose(e) {
      e.preventDefault();
      e.stopPropagation();
      this.ActionSetAlertShow(false);
    }
  }
};
</script>

<style lang="scss">
@import "./app.scss";
</style>
