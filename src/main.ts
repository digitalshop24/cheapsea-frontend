import './core/hooks';
import Vue from 'vue';
import axios from 'axios';
import VueMapp from 'vue-mapp';
import VueCarousel from 'vue-carousel';
import App from './App.vue';
import store from './store';
import router from './router';
import globalComponents from './components/global';
import filters from './helpers/filters';
import './css/@design.css';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://cheapsea.net/api/v1';

Vue.use(globalComponents);
Vue.use(filters);
Vue.use(VueMapp);
Vue.use(VueCarousel);

new App({
    el: '#app',
    router,
    store
});
