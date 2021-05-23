import { debounce } from "./util.js";
export const itemListenerMinxin = {
    data() {
        return {
            detailItemListener: null
        }
    },
    mounted() {
        let newRefresh = debounce((this.$refs.scroll.refresh()), 500);
        this.detailItemListener = () => {
            newRefresh()
        }
        this.$bus.$on('itemImageLoad', this.detailItemListener);
        console.log('min')
    },
}