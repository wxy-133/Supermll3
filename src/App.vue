<template>
  <div id="app">
    <tabBar></tabBar>
    <router-view />
  </div>
</template>

<script>
import tabBar from "./components/common/tabbar/TabBar.vue";
export default {
  name: "App",
  components: {
    tabBar,
  },
};
</script>

<style>
</style>
