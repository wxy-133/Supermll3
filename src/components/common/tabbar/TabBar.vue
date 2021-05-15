<!--  -->
<template>
  <div class="tab-bar">
      <slot></slot>
  </div>
</template>
                                   
<script>
import tabBarItem from "./TabBarItem";
export default {
  name:'tabbar',
  components: {},
  data() {
    return {};
  },
  components: {
    tabBarItem,
  },
  computed: {},
};
</script>
<style  scoped>
.tab-bar {
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.01);
}
</style>