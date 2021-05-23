<!--  -->
<template>
  <div class="detail">
    <detailNavBar ref="ef" class="detail-nav" />
    <scroll ref="scroll" class="content">
      <detailBanners :topImages="topImages" />
      <detailBaseInfo :goods="goods" />
      <detailShopInfo :shop="shop" />
      <detailGoodsInfo :detailInfo="detailInfo" />
      <detailParamsInfo :paramInfo="paramInfo" ref="params" />
      <detailCommentInfo :commentInfo="commentInfo" ref="comment"/>
      <DetailRecommend :recommendgoods="recommends" ref="remmend" />
    </Scroll>
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
import DetailRecommend from "@/components/content/goods/detailRecommend";
import scroll from "@/components/common/scroll/Scroll";
import { getDetail,getRecommend, GoodsInfo, Shop, GoodsParam } from "../../network/detail";
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
    scroll
  },
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo:{},
      commentInfo:{},
      recommends: {},
      detailItemListener:null
    };
  },
  mounted() {
     let newRefresh = debounce(this.$refs.scroll.refresh(), 500);
     this.detailItemListener=()=>{
       newRefresh()
     }
    this.$bus.$on('itemImageLoad',this.detailItemListener)
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
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
    });
      //请求推荐数据
    getRecommend().then(res => {
      //console.log(res);
      this.recommends = res.data.list;
    });
  },
  deactivated(){
    this.$bus.$off('itemImageLoad',this.detailItemListener)
  }
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
}
</style>