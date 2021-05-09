<template>
   <Swiper>
      <SwiperItem v-for="item in banners" :key="item.title">
      <a :href="item.link">
       <img :src="item.image">
      </a>
      </SwiperItem>
    </Swiper>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";
export default {
  components: {},
  props: {
    banners:{
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
  components: {
    Swiper,
    SwiperItem
  },
};
</script>
<style  scoped>
.wrapper{}
</style>