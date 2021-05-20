<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
     <keep-alive><router-view /> </keep-alive>
  </div>
</template>

<script>
import mainTabBar from "./components/content/mainTabBar/MainTabBar";
export default {
  name: "App",
  components: {
    mainTabBar,
  },
};
</script>

<style>
  @import "assets/css/base.css";
</style>
