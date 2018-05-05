import './core/hooks';
import './css/index.css';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import components from './components';
import filters from './helpers/filters';
import axios from 'axios';

axios.defaults.baseURL = 'https://cheapsea.net/api/v1';

Vue.use(components);
Vue.use(filters);

Vue.config.productionTip = false;

new App({
    el: '#app',
    router,
    store
});