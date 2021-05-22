<!--  -->
<template>
  <div class="detail">
    <detailNavBar />
    <detailBanners :topImages="topImages" />
    <h2>{{iid}}</h2>
  </div>
</template>

<script>
import detailNavBar from "./childComps/detailNavbar";
import detailBanners from "./childComps/detailSwiper";
import { getDetail } from "../../network/detail";
export default {
  name: "detail",
  components: {
    detailNavBar,
    detailBanners
  },
  data() {
    return {
      iid: null,
      topImages: null
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      console.log(res);
      //获取顶部轮播数据
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
    });
  }
};
</script>
<style  scoped>
</style>