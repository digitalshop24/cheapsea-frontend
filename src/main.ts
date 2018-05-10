import './core/hooks';
import './css/index.css';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import components from './components';
import filters from './helpers/filters';
import VueMappModal from 'vue-mapp/es5/modal';
import VueMappInput from 'vue-mapp/es5/input';
import VueMappDate from 'vue-mapp/es5/date';
import VueMappPopup from 'vue-mapp/es5/popup';
import VueMappList from 'vue-mapp/es5/list';
import VueMappButton from 'vue-mapp/es5/button';
import VueMappIcon from 'vue-mapp/es5/icon';
import axios from 'axios';

axios.defaults.baseURL = 'https://cheapsea.net/api/v1';

Vue.use(components);
Vue.use(filters);
Vue.use(VueMappModal);
Vue.use(VueMappInput);
Vue.use(VueMappDate);
Vue.use(VueMappPopup);
Vue.use(VueMappList);
Vue.use(VueMappButton);
Vue.use(VueMappIcon);

Vue.config.productionTip = false;

new App({
    el: '#app',
    router,
    store
});
