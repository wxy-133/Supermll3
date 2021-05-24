import { debounce } from "./util.js";
export const itemListenerMinxin = {
    data() {
        return {
            detailItemListener: null,
            isBackTopShow: false,
            isTabFixed:false,
        }
    },
    mounted() {
        const newRefresh = debounce(this.$refs.scroll.refresh, 500);
        this.detailItemListener = () => {
            newRefresh()
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
    },
    deactivated() {
        this.$bus.$off("itemImageLoad",this.detailItemListener);
    },
}