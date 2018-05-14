import './core/hooks';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import components from './components';
import filters from './helpers/filters';
import VueMappModal from 'vue-mapp/es5/modal';
import VueMappPopup from 'vue-mapp/es5/popup';
import VueMappList from 'vue-mapp/es5/list';
import VueMappIcon from 'vue-mapp/es5/icon';
import VueMappSnackbar from 'vue-mapp/es5/snackbar';

import VueMappInputPack from 'vue-mapp/es5/pack/input';

import axios from 'axios';
import './css/index.css';

axios.defaults.baseURL = 'https://cheapsea.net/api/v1';

Vue.use(components);
Vue.use(filters);
Vue.use(VueMappModal);
Vue.use(VueMappPopup);
Vue.use(VueMappList);
Vue.use(VueMappIcon);
Vue.use(VueMappSnackbar);
Vue.use(VueMappInputPack);


Vue.config.productionTip = false;

new App({
    el: '#app',
    router,
    store
});
