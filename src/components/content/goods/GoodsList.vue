<template>
  <div class="goods">
      <GoodsListItem v-for="item in goods" :key="item.iid" :product="item"/>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  components: {
    GoodsListItem
  }
};
</script>
<style  scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
}
</style>