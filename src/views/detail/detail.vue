<!--  -->
<template>
  <div class="detail">
    <h2>1111</h2>
    <h2>{{iid}}</h2>
  </div>
</template>

<script>
export default {
  name: "detail",
  props: {},
  components: {},
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