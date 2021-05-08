<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div class="item-icon" v-if="!isActive">
      <slot name="item-icon"><img src="@/assets/img/tabbar/home.svg" /></slot>
    </div>
    <div class="item-icon-active" v-else>
      <slot name="item-icon-active"
        ><img src="@/assets/img/tabbar/home_active.svg"
      /></slot>
    </div>
    <div class="item-text" :style="activeStyle">
      <slot name="item-text">首页</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColr: {
      type: String,
      default: "pink",
    },
  },
  data() {
    return {
      //   isActive: true,
      currentIndex: 0,
    };
  },
  computed: {
    isActive() {
      //动态决定isactive是值
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColr } : {};
    },
  },
  methods: {
    itemClick() {
      //动态决定路由
      this.$router.replace(this.path);
    },
  },
};
</script>
<style  scoped>
.tab-bar-item {
  flex: 1;
  font-size: 14px;
}
.tab-bar-item img {
  width: 20px;
}
</style>