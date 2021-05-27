<!--  -->
<template>
  <div class="detail">
    <detailNavBar ref="ef" class="detail-nav" @titleClick="titleClick"/>
    <!-- <h2>{{productList}}</h2> -->
    <!-- 属性：topImages 传入值：top-images -->
    <scroll
      ref="scroll"
      class="content"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detailBanners :topImages="topImages" />
      <detailBaseInfo :goods="goods" />
      <detailShopInfo :shop="shop" />
      <detailGoodsInfo :detailInfo="detailInfo" @loadImgEvent="loadImgEvent" />
      <detailParamsInfo :paramInfo="paramInfo" ref="params" />
      <detailCommentInfo :commentInfo="commentInfo" ref="comment" />
      <DetailRecommend :recommendgoods="recommends" ref="remmend" />
    </scroll>
    <BackTop @click.native="backTop" v-show="isBackTopShow" />
    <detailBttomBar @addCart="addToCart"/>
  </div>
</template>

<script>
import detailNavBar from "./childComps/detailNavbar";
import detailBanners from "./childComps/detailSwiper";
import detailBaseInfo from "./childComps/detailBaseInfo";
import detailShopInfo from "./childComps/detailShopInfo";
import detailGoodsInfo from "./childComps/dtailGoodsInfo";
import detailParamsInfo from "./childComps/detailParamsInfo";
import detailCommentInfo from "./childComps/detailCommentInfo";
import detailBttomBar from "./childComps/detailBottomBar";
import DetailRecommend from "@/components/content/goods/detailRecommend";
import BackTop from "@/components/content/backTop/backTop";
import scroll from "@/components/common/scroll/Scroll";
import {
  getDetail,
  getRecommend,
  GoodsInfo,
  Shop,
  GoodsParam,
} from "../../network/detail";
import { itemListenerMinxin } from "../../common/mixin.js";
import { debounce } from "../../common/util.js";
export default {
  name: "detail",
  components: {
    detailNavBar,
    detailBanners,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamsInfo,
    detailCommentInfo,
    DetailRecommend,
    detailBttomBar,
    scroll,
    BackTop,
  },
  mixins: [itemListenerMinxin],
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: {},
      themeTopYs: [],
      gethemeTopY: null,
      currentIndex:null,
      productList:{}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      //console.log(res);
      //获取顶部轮播数据
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
      //获取商品信息
      this.goods = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //console.log(this.goods)
      //获取店铺信息
      this.shop = new Shop(data.shopInfo);
      //获取宝贝的详细信息
      this.detailInfo = data.detailInfo;
      // 获取商品参数信息
      // this.paramInfo = data.itemParams;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //console.log(this.paramInfo);
      //取出我们的评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
      //01 获取值不对，因为组件没有渲染
      //   this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.remmend.$el.offsetTop);
      //   console.log(this.themeTopYs);
      //02 $nextTick 获取值不对，因为图片没有加载完成不计算高度
      // this.$nextTick(() => {
      //   this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.remmend.$el.offsetTop);
      //   console.log(this.themeTopYs);
      // });
    });
    //请求推荐数据
    getRecommend().then((res) => {
      //console.log(res);
      this.recommends = res.data.list;
    });
    //给gethemeTopy赋值(进行防抖)
    this.gethemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.remmend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      //console.log(this.themeTopYs);
    },100);
  },
  methods: {
    //判断图片加载完成
    loadImgEvent() {
      this.newRefresh();
      this.gethemeTopY();
    },
    contentScroll(position) {
      //判断我们的backtop是否显示
      this.isBackTopShow = -position.y > 1000;
      const positionY=-position.y;
      //MAX_VALUE

      for(let i=0; i<this.themeTopYs.length-1;i++){
        // if(positionY>this.themeTopYs[i]&&positionY<this.themeTopYs[i+1]){
        //   console.log(i)
        // }
        // if(this.currentIndex!=i&&(i<this.themeTopYs.length-1&&positionY>=this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])||
        // (i===this.themeTopYs.length-1&&positionY>this.themeTopYs[i])){
        //  this.currentIndex=i;
        //  console.log(this.currentIndex)
        //  this.$refs.ef.currentIndex=this.currentIndex
        // }
        //hack
        if(this.currentIndex!=i&&(positionY>this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])){
           this.currentIndex=i;
           this.$refs.ef.currentIndex=this.currentIndex
        }
      }
    },
    //监听标题点击
    titleClick(index) {
      //console.log(index);
      //根据index滚动到对应展示
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    //监听购物车点击
    addToCart(){
      const product={};
      product.image=this.topImages[0];
      product.title=this.goods.title;
      product.desc=this.goods.desc;
      product.realPrice=this.goods.realPrice;
      product.iid=this.iid;
      //添加到购物车
      //this.$store.commit('addCart',product);
      this.$store.dispatch('addCart',product);
      this.productList=product;
    }
  },

  updated() {},
  deactivated() {
    this.$bus.$off("itemImageLoad", this.detailItemListener);
  },
};
</script>
<style  scoped>
.detail-nav {
  position: relative;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 10;
  background-color: white;
}
.detail {
  height: 100vh;
  background-color: #fff;
}
.content {
  background-color: #fff;
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>