<template>
  <div class="recommendgoods">
    <detailListItem  v-for="item in recommendgoods" :key="item.iid" :product="item"/>
  </div>
</template>

<script>
import detailListItem from "./detailListItem";
export default {
  props: {
    recommendgoods: {
    }
  },
  data() {
    return {};
  },
  components: {
    detailListItem
  }
};
</script>
<style  scoped>
.recommendgoods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
.goods-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>