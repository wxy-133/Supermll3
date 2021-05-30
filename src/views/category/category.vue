<!--  -->
<template>
  <div class="category">
    <NavBar class="nav-bar">
      <div slot="center">分类</div>
    </NavBar>
    <div class="main">
      <category-left ref="left"></category-left>
      <div class="null" v-if="isShow !== false">
        <category-right ref="right" :list_item="rightList"></category-right>
      </div>
      <div class="show" ref="right" v-else>
        <h2>暂时没有数据</h2>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryLeft from "./childComps/categoryLeft";
import CategoryRight from "./childComps/CategoryRight";
import NavBar from "@/components/common/navbar/NavBar";
import BScroll from "better-scroll";
import { getCategoryInfo } from "@/network/category.js";
export default {
  name: "category",
  components: {},
  data() {
    return {
      scroll: null,
      rightList: null,
      isShow: false,
    };
  },
  components: {
    BScroll,
    NavBar,
    CategoryLeft,
    CategoryRight,
  },
  mounted() {
    //  this.scroll = new BScroll(this.$refs.aaaa, {
    //       // probeType: 3,
    //       // pullUpLoad: true
    //     })
    //     this.scroll.on('scroll', (position) => {
    //       console.log(position);
    //     })
    //     this.scroll.on('pullingUp', () => {
    //       console.log('上啦加载更多');
    //     })
  },
  methods: {
    async getCategoryInfo(maitKey) {
      let res = await getCategoryInfo(maitKey);
      if (res) {
        console.log(res);
        this.rightList = res.list;
      }
    },
  },
  created() {
    this.isShow = this.rightList != null;
  },
};
</script>
<style  scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: white;
}
.show {
  width: 75%;
  float: right;
}
</style>