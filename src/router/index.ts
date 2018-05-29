import Vue from 'vue';
import Router from 'vue-router';
import Search from '@/pages/Search.vue';
import Home from '@/pages/Home.vue';
import Chips from '@/pages/Chips.vue';
import Offers from '@/pages/Offers.vue';
import LocationPage from '@/pages/Location.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        mobileHead: true
      }
    },
    {
        path: '/offers',
        name: 'offers',
        props: true,
        component: Offers
    },
    {
        path: '/location',
        name: 'location',
        component: LocationPage
    },
    // {
    //     path: '*',
    //     redirect: { name: 'front' }
    // }
  ]
});
