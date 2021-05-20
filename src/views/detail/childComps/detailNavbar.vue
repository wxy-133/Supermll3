<template>
  <div class="detailNav">
   <NavBar>
      <div slot="left" class="left-img" @click="backClick">
       <img src="../../../assets/img/common/back.svg">
      </div>
      <div slot="center" class="titles">
       <div @click="titleClick(index)" v-for="(item , index) in titles" :class="{active:index==currentIndex}" :key="index">{{item}}</div>
      </div>
     </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  components: {
      NavBar
  },
  props: {},
  data() {
    return {
      titles:["商品","参数","评论","推荐"],
      currentIndex:0
    };
  },
  methods:{
    backClick(){
      this.$router.back();
    },
    titleClick(index){
      this.currentIndex=index
    }
  }
}
</script>
<style scoped>
.left-img img{
  margin-top: 10px;
}
.titles{
  display: flex;
}
.titles div{
  flex:1;
  font-size: 13px;
}
.titles div.active{
  color: var(--color-tint);
}
</style>