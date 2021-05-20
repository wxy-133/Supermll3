<!--  -->
<template>
  <div class="detail">
    <detailNavBar/>
    <h2>{{iid}}</h2>
  </div>
</template>

<script>
import detailNavBar from './childComps/detailNavbar'
export default {
  name: "detail",
  props: {},
  components: {
  detailNavBar
  },
  data() {
    return { 
        iid: null 
        };
  },
  created(){
     this.iid = this.$route.params.iid;
  },
};
</script>
<style  scoped>
</style>