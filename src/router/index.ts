import Vue from 'vue';
import Router from 'vue-router';
import Search from '@/pages/search/Search.vue';
import Front from '@/pages/front/Front.vue';

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
            path: '*',
            redirect: { name: '' }
        }
    ]
});
