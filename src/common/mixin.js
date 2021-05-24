import { debounce } from "./util.js";
export const itemListenerMinxin = {
    data() {
        return {
            detailItemListener: null,
            isBackTopShow: false,
            newRefresh:null
        }
    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
        this.detailItemListener = () => {
            this.newRefresh()
            //console.log('mix')
        }
        this.$bus.$on('itemImageLoad', this.detailItemListener);
    },
    methods: {
        debounce(func,delay){
            let timer=null
            return function(...args){
                if(timer) clearTimeout(tinmer)
                tinmer =setTimeout(()=>{
                   func.apple(this,args)
                },delay)
            }
        }
    }
}