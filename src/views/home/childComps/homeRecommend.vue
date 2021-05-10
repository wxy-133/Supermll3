<template>
  <div class="recommend">
    <div class="recmmend-item" v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" />
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
.recommend {
  display: flex;
  padding-left: 10px;
}
.recommend .recmmend-item {
  flex: 1;
}
.recommend .recmmend-item img {
  width: 70px;
  margin: 0 auto;
  margin-top: 10px;
}
.recommend .recmmend-item p {
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
}
</style>