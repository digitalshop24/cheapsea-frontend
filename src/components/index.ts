import Hello from './Hello.vue';
import Button from './Button.vue';
import Loader from './Loader.vue';

export default function (Vue) {
    Vue.component('hello', Hello);
    Vue.component('cs-button', Button);
    Vue.component('cs-loader', Loader);
}
