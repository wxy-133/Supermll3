<!--  -->
<template>
  <div class="cart">
    <NavBar class="cart-nav">
    <div slot="center" >购物车({{length}})</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {mapGetters} from 'vuex'
export default {
  name: "cart",
  components: {},
  data() {
    return {};
  },
  components: {
    NavBar
  },
  computed:{
    //01
    // cartlength(){
    //   return this.$store.state.cartList.length
    // }
    //02
    // cartlength(){
    //   return this.$store.getters.cartlength
    // }
    //03
    // ...mapGetters(['cartlength','cartList']) //cartlength
    //04
    ...mapGetters({
      length:'cartlength',
      list:'cartList'
    })
  }
};
</script>
<style  scoped>
.cart-nav{
    background-color: var(--color-tint);
    color: white;
}
</style>