import Vue from 'vue';
import Router from 'vue-router';
import Search from '@/pages/Search.vue';
import Front from '@/pages/Front.vue';
import Chips from '@/pages/Chips.vue';
import Offers from '@/pages/Offers.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'front',
            component: Front
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/offers',
            name: 'offers',
            props: true,
            component: Offers
        },
        {
            path: '*',
            redirect: { name: 'front' }
        }
    ]
});
