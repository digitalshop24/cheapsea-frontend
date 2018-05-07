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
    .main
        .container
            router-link(:to="{ name: 'search' }").main-banner_search
                    .main-banner_search-title
                        |Хочу на море дешево!!!
                        img(src="/static/images/icons/icon-swimsuit.png" alt="icon")
                        img(src="/static/images/icons/icon-glasses.png" alt="icon")

                    .main-banner_search-icon
            .main-weekly
                .main-weekly-title Лучшие предложения недели
                .main-weekly-wrap-outer
                    .main-weekly-wrap(style="min-width:450px")
                        .main-weekly-unit(style="background-image:url(/static/images/main-weekly-01.png)")
                            .main-weekly-unit-filter
                            .main-weekly-unit-content
                                .main-weekly-unit-info 16 часов. Без пересадок. Из Москвы
                                a(href="#/").main-weekly-unit-title Комсомольск-на-Амуре
                                .main-weekly-unit-price от 6 500 руб.
                        .main-weekly-unit(style="background-image:url(/static/images/main-weekly-01.png)")
                            .main-weekly-unit-filter
                            .main-weekly-unit-content
                                .main-weekly-unit-info 16 часов. Без
                                a(href="#/").main-weekly-unit-title Кефлавик
                                .main-weekly-unit-price от 7 900 руб.
            .main-list
            .main-list-tabs
                .main-list-tabs-unit Турция
                .main-list-tabs-unit.active Индия
                .main-list-tabs-unit Ю. Америка
                .main-list-tabs-next
            .main-list-filter
                .main-list-filter-title Сначала дешевые
                .main-list-filter-button Фильтр
            .main-list-wrap
                card(
                    v-for="offer in offers"
                    :key="offer.id"
                    :offer="offer"
                    @select="selectOffer"
                )
                cs-loader(v-if="processing")
    
    chips(
        v-if="selectedOffer"
        :offer="selectedOffer"
        @close="selectedOffer = null"
    )

</template>

<script lang="ts">
import RoutePage from '@/core/route';
import { Component } from 'vue-property-decorator';
import Search from './Search.vue';
import axios from 'axios';

@Component({
    name: 'offers-page',
    components: {
        search: Search
    }
})
export default class FrontRoute extends RoutePage {

    processing: boolean = false;
    page: number = 1;
    offers: any[] = [];
    selectedOffer: any = null;

    filters: object = {
        'offer_type': 'airplane'     
    };

    getOffers() {
        const { page } = this;

        this.processing = true;
        
        axios.get(`/offers?${this.filterString}&page=${page}`)
            .then(res => {
                if (page > 1) {
                    this.offers = this.offers.concat(res.data);
                } else {
                    this.offers = res.data;
                }
                
                this.processing = false;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    selectOffer(offer) {
        this.selectedOffer = offer;
    }

    get filterString(): string {
        const filters = this.filters;

        return Object.keys(filters)
                .filter(prop => {
                    return !!filters[prop];
                })
                .map(prop => `${prop}=${filters[prop]}`)
                .join('&');
    }

    appendOffers() {
        this.page++;
        this.getOffers();
    }


    created() {
        this.getOffers();
        this.$root.$on('scrollend', this.appendOffers);
    }

    beforeDestroy() {
        this.$root.$off('scrollend', this.appendOffers);
    }
}
</script>

<style lang="postcss">

</style>
