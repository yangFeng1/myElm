import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home.vue'
import city from '../page/city.vue'
import index from '../page/index.vue'
import food from '../page/food.vue'
import shop from '../page/shop/shop.vue'
import comment from '../page/shop/comment.vue'
import shopping from '../page/shop/shopping.vue'
import scroll from '../page/scroll.vue'
import commodityList from '../components/commodityList.vue'
// const comments = r => require.ensure([], () => r(require('../page/shop/comment.vue')), '')
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        component: home
    },{
         path: '/scroll',
          component: scroll
    },{
         path: '/commodityList',
          component: commodityList
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
        component: shop,
        children: [{
            path: '/shop/comment',
            component: comment
        },{
            path: '/shop/shopping',
            component: shopping
        },{
            path: '/shop',
            component: shopping
        }]
    }]
})
