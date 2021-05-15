<template>
  <div class="tabbar-control">
    <div class="tabbar-control-item"
      v-for="(item,index) in titles"
      :key="item"
      :class="{active:index===currentIndex}"
      @click="itemClick(index)">{{item}}</div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index){
      this.currentIndex=index;
      this.$emit('tabClick',index)
    }
  }
};
</script>
<style  scoped>
.tabbar-control {
  width: 100%;
  display: flex;
  font-size: 15px;
  line-height: 40px;
  height: 40px;
  text-align: center;
  background-color: #ffffff;
}
.tabbar-control .tabbar-control-item {
  flex: 1;
}
.active {
  color: #ff5777;
  position: relative;
}
.active::after {
  position: absolute;
  content: "";
  width: 30px;
  height: 2px;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-tint);
}
</style>