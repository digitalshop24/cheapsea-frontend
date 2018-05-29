import Header from './layout/Header.vue';
import Modal from './layout/Modal.vue';
import Offers from './offers/OffersList.vue';
import OfferCard from './offer/OfferCard.vue';
import SelectCity from './controls/SelectCity.vue';
import OfferType from './controls/OfferType.vue';

export default function (Vue) {
    Vue.component('app-header', Header);
    Vue.component('Modal', Modal);
    Vue.component('Offers', Offers);
    Vue.component('SelectCity', SelectCity);
    Vue.component('OfferType', OfferType);
    Vue.component('OfferCard', OfferCard);
}
