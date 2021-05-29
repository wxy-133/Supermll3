<template>
  <div class="bottom-bar">
    <div class="check-all">
      <CheckButton class="check-btn" :isChecked="isSelectAll" @click.native="checkAll"/><span
        >全选</span
      >
    </div>
    <div class="totalPrice">合计：{{ totalPrice }}</div>
    <div class="buy" @click="calcClick">去购买({{ totalLength }})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    CheckButton,
  },
  methods: {
    checkAll(){
      if(this.isSelectAll){
        this.cartList.forEach(item=>item.checked=false)
      }else{
        this.cartList.forEach(item=>item.checked=true)
      }
        // this.cartList.forEach(item=>item.checked=!this.isSelectAll)
    },
     calcClick(){
      if(!this.isSelectAll){
        this.$toast.show('请选择要购买的商品',2000)
      }
    }
  },
  created(){
        //console.log(this.$store.state.cartList);
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice(){
      return '￥' + this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
       console.log(  item.realPrice)
        return preValue + item.realPrice*item.count;

      },0).toFixed(2)
    },
    // cartList() {
    //   return this.$store.state.cartList;
    // },
    // checkedItem() {
    //   return this.cartList.filter((item, index) => item.checked == true);
    // },
    // totalLength() {
    //   return this.checkedItem.length;
    // },
    // totalPrice() {
    //   return this.checkedItem.reduce(
    //     (pre, item) => pre + item.count * item.price,
    //     0
    //   );
    // },
    totalLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      // return !(this.cartList.filter(item=>item.checked).length)
      // return !this.cartList.find(item=>item.checked)
      if (this.cartList.length == 0) {
        return false;
      } else {
        return this.cartList.every((item) => item.checked == true);
      }
    },
   
  },
};
</script>
<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  line-height: 40px;
  position: relative;
  bottom: 40px;
  left: 0px;
  right: 0px;
  display: flex;
}
.check-all {
  width: 70px;
  display: flex;
}
.check-btn {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 10px;
  line-height: 20px;
}
.totalPrice {
  margin-left: 10px;
}
.buy {
  width: 5rem;
  background-color: #f03;
  color: white;
  margin-left: 2rem;
}
</style>
