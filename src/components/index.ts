import Header from './Header.vue';
import Card from './Card.vue';
import Chips from './Chips.vue';
import Offers from './Offers.vue';
import SelectCity from './select/SelectCity.vue';

export default function (Vue) {
    Vue.component('card', Card);
    Vue.component('app-header', Header);
    Vue.component('chips', Chips);
    Vue.component('offers', Offers);
    Vue.component('SelectCity', SelectCity);
}
