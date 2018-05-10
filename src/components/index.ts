import Button from './Button.vue';
import Loader from './Loader.vue';
import Header from './Header.vue';
import Card from './Card.vue';
import Chips from './Chips.vue';
import Offers from './Offers.vue';

export default function (Vue) {
    Vue.component('card', Card);
    Vue.component('cs-button', Button);
    Vue.component('cs-loader', Loader);
    Vue.component('app-header', Header);
    Vue.component('chips', Chips);
    Vue.component('offers', Offers);
}
