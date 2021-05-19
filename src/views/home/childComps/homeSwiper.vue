<template>
   <Swiper>
      <SwiperItem v-for="item in banners" :key="item.title">
      <a :href="item.link">
       <img :src="item.image" @load="imageLoad">
      </a>
      </SwiperItem>
    </Swiper>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";
export default {
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
      isLoad:false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){
      this.$emit('swiperImageLoad');
      this.isLoad=true;
      }
    }
  }
};
</script>
<style  scoped>
.wrapper{}
</style>