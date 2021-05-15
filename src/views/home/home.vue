<!--  -->
<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <homeSwiper :banners="banners" />
    <homeRecommend :recommends="recommends" />
    <homeFeatureView />
    <tabBarControl class="tabbar-control" :titles="['流行','新款','精选']" />
    <GoodsLists :goods="goods['pop'].list"/>
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";
import NavBar from "@/components/common/navbar/NavBar";
import tabBarControl from "@/components/content/tabBarControl/tabBarControl";
import GoodsLists from "@/components/content/goods/GoodsList";
import homeSwiper from "./childComps/homeSwiper";
import homeRecommend from "./childComps/homeRecommend";
import homeFeatureView from "./childComps/homeFeatureView";
import { getHomeMultidata, getHomeGoods } from "@/network/home";
export default {
  name: "home",
  components: {},
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: [] },
        'new': {page: 0, list: [] },
        'sell': {page: 0, list: [] }
      }
    };
  },
  computed: {},
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    tabBarControl,
    homeSwiper,
    homeRecommend,
    homeFeatureView,
    GoodsLists
  },
  created() {
    //请求轮播，推荐数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page=this.goods[type].page+1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        console.log(res.data)
        this.goods[type].page+=1;
      });
    }
  }
};
</script>
<style  scoped>
.home {
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
.palchor {
  height: 800px;
}
.tabbar-control {
  position: sticky;
  top: 44px;
}
</style>