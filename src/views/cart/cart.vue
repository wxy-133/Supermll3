<!--  -->
<template>
  <div class="cart">
    <NavBar class="nav-bar">
    <div slot="center" >购物车({{length}})</div>
    </NavBar>
      <CartList/>
      <CartBottomBar/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
import {mapGetters} from 'vuex'
export default {
  name: "cart",
  components: {},
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
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
      length:'cartLength',
      list:'cartList'
    })
  }
};
</script>
<style  scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: white;
}
.cart{
  height: 100vh;
}
</style>