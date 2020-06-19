<template>
  <div id="app">
    <a-layout id="components-layout-demo-responsive">    
    <Menu />
    <a-layout>
      <a-layout-header :style="{ background: 'rgba(88, 27, 76, 0.16)', padding: 0, display: 'flex' }" >
        <Header />
      </a-layout-header>        
      <a-layout-content :style="{ margin: '2rem' }">
        <div>
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Açai ©2020 Created by Everton
      </a-layout-footer>
    </a-layout>
  </a-layout>
  </div>
</template>

<script>
import Header from './components/header/header';
import Menu from './components/menu/menu.vue';

export default {
  components: {
    Header,
    Menu
  }
};
</script>

<style lang="scss">
@import './app.scss';
</style>
