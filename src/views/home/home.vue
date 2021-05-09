<!--  -->
<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <homeSwiper :banners="banners"/>
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";
import NavBar from "@/components/common/navbar/NavBar";
import homeSwiper from "./childComps/homeSwiper";
import { getHomeMultidata } from "@/network/home";
export default {
  name: "home",
  components: {},
  data() {
    return {
      banners: [],
      recommend: []
    };
  },
  computed: {},
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    homeSwiper
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners=res.data.banner.list;
      this.recommend=res.data.recommend.list;
    });
  }
};
</script>
<style  scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>