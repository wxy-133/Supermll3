import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index'
import toast from './components/common/toast'
Vue.use(toast)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    axios,
    store,
    render: h => h(App)
})