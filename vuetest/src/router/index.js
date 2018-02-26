import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home.vue'
import city from '../page/city.vue'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        component: home
    }, {
        path: '',
        component: home
    },{
        path: '/city',
        component: city
    }]
})