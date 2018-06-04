import './core/hooks';
import Vue from 'vue';
import axios from 'axios';
import VueMapp from 'vue-mapp';
import VueAgile from 'vue-agile';
import VueCarousel from 'vue-carousel';
import App from './App.vue';
import store from './store';
import router from './router';
import filters from './helpers/filters';
import controls from './components/controls';
import './css/@app.css';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://cheapsea.net/api/v1';

Vue.use(controls);
Vue.use(filters);
Vue.use(VueMapp);
Vue.use(VueCarousel);
Vue.use(VueAgile);

new App({
    el: '#app',
    router,
    store
});
