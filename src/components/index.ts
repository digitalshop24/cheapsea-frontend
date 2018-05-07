import Button from './Button.vue';
import Loader from './Loader.vue';
import HeaderBack from './HeaderBack.vue';
import Card from './Card.vue';
import Chips from './Chips.vue';

export default function (Vue) {
    Vue.component('card', Card);
    Vue.component('cs-button', Button);
    Vue.component('cs-loader', Loader);
    Vue.component('header-back', HeaderBack);
    Vue.component('chips', Chips);
}
