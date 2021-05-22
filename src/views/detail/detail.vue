<!--  -->
<template>
  <div class="detail">
    <detailNavBar />
    <detailBanners :topImages="topImages" />
    <detailBaseInfo :goods="goods"/>
    <h2>{{iid}}</h2>
  </div>
</template>

<script>
import detailNavBar from "./childComps/detailNavbar";
import detailBanners from "./childComps/detailSwiper";
import detailBaseInfo from "./childComps/detailBaseInfo";
import { getDetail,GoodsInfo} from "../../network/detail";
export default {
  name: "detail",
  components: {
    detailNavBar,
    detailBanners,
    detailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImages: null,
       goods: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      console.log(res);
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
    });
  }
};
</script>
<style  scoped>
</style>