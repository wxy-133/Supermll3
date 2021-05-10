<!--  -->
<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <homeSwiper :banners="banners"/>
    <homeRecommend :recommends="recommends"/>
    <homeFeatureView/>
    <div class="palchor"></div>
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";
import NavBar from "@/components/common/navbar/NavBar";
import homeSwiper from "./childComps/homeSwiper";
import homeRecommend from './childComps/homeRecommend'
import homeFeatureView from './childComps/homeFeatureView'
import { getHomeMultidata } from "@/network/home";
export default {
  name: "home",
  components: {},
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  computed: {},
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    homeSwiper,
    homeRecommend,
    homeFeatureView
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    });
  }
};
</script>
<style  scoped>
.home{
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.palchor{
  height: 800px;
}
</style>