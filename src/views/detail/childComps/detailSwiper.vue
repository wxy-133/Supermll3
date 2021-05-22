<template>
  <div class="detailSwiper">
    <Swiper>
      <SwiperItem v-for="item in topImages" :key="item" class="detailSwiperItem"> 
         <img :src="item">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";
export default {
  props: {
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
    };
  },
  components:{
    Swiper,
    SwiperItem,
  },
  methods: {},
  created() {},
  mounted() {}
}
</script>

<style scoped>
.detailSwiperItem{
  height: 300px;
  overflow: hidden;
}
</style>