<template>
  <div class="check-button" :class="{checked:isChecked}">
     <img src="./../../../assets/img/cart/tick.svg"> 
  </div>
</template>

<script>

  export default {
    name:'CheckButton',
    props:{
       isChecked:{
        type:Boolean,
        default:true
       }
    
    },
    data () {
      return {
     
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style scoped>
.check-button{
  position: relative;
  top: calc(50% - 0.35rem);
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 auto;
  border-radius: 0.35rem;
  border: 0.04rem solid rgba(128, 128, 128, 0.4);
}
.check-button img{
  width: 100%;
}
.check-button.checked {
  width: 1rem;
  height: 1rem;
  border-style: none;
  top: calc(50% - 0.5rem);
  background-color: var(--color-tint);
  
}
</style>