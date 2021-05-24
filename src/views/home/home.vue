<!--  -->
<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tabBarControl ref="tabControl1" 
    class="tabbar-control2" 
    :titles="['流行','新款','精选']" 
    @tabClick="tabClick" 
    v-show="isTabFixed"></tabBarControl>
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <homeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <homeRecommend :recommends="recommends" />
      <homeFeatureView />
      <tabBarControl  ref="tabControl2" class="tabbar-control" :titles="['流行','新款','精选']" @tabClick="tabClick" />
      <GoodsLists :goods="goods[currentType].list" />
    </Scroll>
    <BackTop @click.native="backTop" v-show="isBackTopShow" />
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import tabBarControl from "@/components/content/tabBarControl/tabBarControl";
import GoodsLists from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backTop/backTop";
import homeSwiper from "./childComps/homeSwiper";
import homeRecommend from "./childComps/homeRecommend";
import homeFeatureView from "./childComps/homeFeatureView";
import { getHomeMultidata, getHomeGoods } from "@/network/home";
import { itemListenerMinxin } from "../../common/mixin.js";
export default {
  name: "home",
  components: {},
  mixins:[itemListenerMinxin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isBackTopShow: false,
      tabOffsetTop: 0,
      saveY:0
    };
  },
  computed: {},
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    Scroll,
    tabBarControl,
    homeSwiper,
    homeRecommend,
    homeFeatureView,
    GoodsLists,
    BackTop
  },
  activated() {
    //监听图片加载
    // this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  created() {
    //请求轮播，推荐数据
     console.log(this.$refs.scroll)
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // this.tabOffsetTop=$this.$refs.tabOffsetTop.$el.offsetTop;
  },
  methods: {
    //事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0: {
          this.currentType = "pop";
          break;
        }
        case 1: {
          this.currentType = "new";
          break;
        }
        case 2: {
          this.currentType = "sell";
          break;
        }
      }
      this.$refs.tabControl1.currentIndex=index;
      this.$refs.tabControl2.currentIndex=index;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      //判断我们的backtop是否显示
      this.isBackTopShow = -position.y > 1000
      //决定tabcontrol是否吸顶
      // this.isTabFIxed= (-position.y) > this.tabOffsetTop  :class="{fixed:isTabFixed}"
      var tabOffsetTop2=this.tabOffsetTop;
      this.isTabFixed= (-position.y) > tabOffsetTop2;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      //console.log("上拉了");
    },
    swiperImageLoad() {
      this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
    },
    //网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        //console.log(res.data);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    }
  },
  deactivated() {
    this.saveY=this.$refs.scroll.getScrollY();
  }
};
</script>
<style  scoped>
.home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
 /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;*/
}
.palchor {
  height: 800px;
}
.tabbar-control {
  z-index: 9;
}
.tabbar-control2{
  position: relative;
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
}
/*.content{
  height: calc(100vh - 93px);
  overflow: hidden;
}*/
</style>