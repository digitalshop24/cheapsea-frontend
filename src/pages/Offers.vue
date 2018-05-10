<template lang="pug">
div
    header.header
        .container
            .header-menu
            a(href="#/").header-logo
                img(src="/static/images/logo.svg" alt="cheapsea")
            .header-buttons
                .header-add
                .header-profile
    //- .main
    //-     .container
    //-         .main-list
    //-         .main-list-tabs
    //-             .main-list-tabs-unit Турция
    //-             .main-list-tabs-unit.active Индия
    //-             .main-list-tabs-unit Ю. Америка
    //-             .main-list-tabs-next
    //-         .main-list-filter
    //-             .main-list-filter-title Сначала дешевые
    //-             .main-list-filter-button Фильтр
    //-         .main-list-wrap
    //-             card(
    //-                 v-for="offer in offers.data"
    //-                 :key="offer.id"
    //-                 :offer="offer"
    //-                 @select="selectOffer"
    //-             )
    //-             cs-loader(v-if="offers.processing")
    
    //- chips(
    //-     v-if="selectedOffer"
    //-     :offer="selectedOffer"
    //-     @close="selectedOffer = null"
    //- )

</template>

<script lang="ts">
import RoutePage from '@/core/route';
import { Component } from 'vue-property-decorator';
import Search from './Search.vue';
import axios from 'axios';
import Offers from '@/core/app/offers';

@Component({
    name: 'offers-page'
})
export default class OffersRoute extends RoutePage {

    offers: Offers = new Offers();
    selectedOffer: any = null;

    filters: object = {
        'offer_type': 'airplane'     
    };

    async getOffers() {
        const offers = new Offers(this.filters);
    
        await offers.get();
        this.offers = offers;
    }

    appendOffers() {
        this.offers.append();
    }

    selectOffer(offer) {
        this.selectedOffer = offer;
    }

    created() {
        this.getOffers();
        this.$root.$on('scrollend', this.appendOffers);
    }

    beforeDestroy() {
        this.$root.$off('scrollend', this.appendOffers);
    }

    mounted() {
        console.log(this.$route);
    }
}
</script>

<style lang="postcss">

</style>
