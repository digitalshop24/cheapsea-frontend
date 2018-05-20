import './core/hooks';
import Vue from 'vue';
import axios from 'axios';
import VueMappModal from 'vue-mapp/es5/modal';
import VueMappPopup from 'vue-mapp/es5/popup';
import VueMappList from 'vue-mapp/es5/list';
import VueMappIcon from 'vue-mapp/es5/icon';
import VueMappSnackbar from 'vue-mapp/es5/snackbar';
import VueMappLoader from 'vue-mapp/es5/loader';
import VueMappInputPack from 'vue-mapp/es5/pack/input';
import App from './App.vue';
import store from './store';
import router from './router';
import globalComponents from './components/global';
import filters from './helpers/filters';
import './css/index.css';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://cheapsea.net/api/v1';

Vue.use(globalComponents);
Vue.use(filters);
Vue.use(VueMappModal);
Vue.use(VueMappPopup);
Vue.use(VueMappList);
Vue.use(VueMappIcon);
Vue.use(VueMappSnackbar);
Vue.use(VueMappInputPack);
Vue.use(VueMappLoader);

new App({
    el: '#app',
    router,
    store
});
