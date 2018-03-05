import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home.vue'
import city from '../page/city.vue'
import index from '../page/index.vue'
import food from '../page/food.vue'
import shop from '../page/shop.vue'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        component: home
    }, {
        path: '',
        component: home
    }, {
        path: '/city',
        component: city
    }, {
        path: '/index',
        component: index
    }, {
        path: '/food',
        component: food
    }, {
        path: '/shop',
        component: shop
    }]
})