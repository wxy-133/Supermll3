<!--  -->
<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
export default {
  props:{
    // message:{
    //     type:String,
    //     default:'操作成功'
    // },
    // isShow:{
    //     type:Boolean,
    //     default:false
    // }
  },
  data() {
    return {
        message:'',
        isShow:false
    };
  },
  methods:{
      //durarion 默认时间  01 duration=1500 02 duration=duration||2000
      Show(message,duration=1500){
          this.isShow=true,
          this.message=message;
          setTimeout(()=>{
            this.isShow=true,
            this.message=''
          },duration)
      }
  }
};
</script>
<style scoped>
.toast{
    color: white;
    text-align: center;
    position: fixed;
    top: 50%;
    padding: 10px;
    border-radius: 4px;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-color: rgb(0 0 0 / 50%);
}
</style>