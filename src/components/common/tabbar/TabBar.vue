<!--  -->
<template>
  <div class="tab-bar">
    <tabBarItem path='/home' activeColr="pink"> 
        <img slot="item-icon" src="../../../assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
    </tabBarItem>
    <tabBarItem path="/category" activeColr="pink">
        <img slot="item-icon" src="../../../assets/img/tabbar/category.svg">
        <div slot="item-text">分类</div>
    </tabBarItem>
    <tabBarItem path="cart" activeColr="pink">
        <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg">
        <div slot="item-text">购物车</div>
    </tabBarItem>
    <tabBarItem path="profile" activeColr="pink">
        <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg">
        <div slot="item-text">我的</div>
    </tabBarItem>
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
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.01);
}
</style>