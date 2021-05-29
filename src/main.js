import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index'
import toast from './components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.use(toast)
Vue.use(VueLazyLoad, {
    loading: require('./assets/img/common/placeholder.png')
})
FastClick.attach(document.body)
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