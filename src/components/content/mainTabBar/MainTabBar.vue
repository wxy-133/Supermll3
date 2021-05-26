<template>
  <tab-bar>
      <tabBarItem path='/home' activeColr="pink"> 
        <img slot="item-icon" src="../../../assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
    </tabBarItem>
    <tabBarItem path="/category" activeColr="pink">
        <img slot="item-icon" src="../../../assets/img/tabbar/category.svg">
        <div slot="item-text">分类</div>
    </tabBarItem>
    <tabBarItem path="/cart" activeColr="pink">
        <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg">
        <div slot="item-text">购物车</div>
    </tabBarItem>
    <tabBarItem path="/profile" activeColr="pink">
        <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg">
        <div slot="item-text">我的</div>
    </tabBarItem>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
