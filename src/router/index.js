import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = () =>
    import ('@/views/home/home')
const Category = () =>
    import ('@/views/category/category')
const Cart = () =>
    import ('@/views/cart/cart')
const Profile = () =>
    import ('@/views/profile/profile')
const Detail = () =>
    import ('@/views/detail/detail')
export default new Router({
    routes: [{
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/category',
            name: 'category',
            component: Category
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/detail/:iid',
            name: 'detail',
            component: Detail
        }
    ],
    mode: 'history',
    linkActiveClass: 'active'
})