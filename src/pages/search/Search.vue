<template lang="pug">
.search
    .search-filter
        .search-unit
            .search-unit-input-wrap
                input(type="text")
                span.search-unit-input-placeholder Откуда
            .search-unit-input-wrap
                input(type="tel")
                span.search-unit-input-placeholder Куда
        .search-unit
            .search-unit-input-wrap.filled.search-unit-input-wrap_date
                input(type="date" value="2018-04-10")
                span.search-unit-input-placeholder Когда
        .search-type
            .search-type-title Тип предложения
            .search-type-wrap
                .search-type-unit.plane
                    .search-type-unit-title самолет
                    .search-type-unit-image
                .search-type-unit.train.active
                    .search-type-unit-title поезд
                    .search-type-unit-image
                .search-type-unit.tour
                    .search-type-unit-title тур
                    .search-type-unit-image
                .search-type-unit.car
                    .search-type-unit-title авто
                    .search-type-unit-image
    .search-content
        cs-loader(v-if="!offers.length")
        template(v-else)
            card(
                v-for="offer in offers"
                :key="offer.id"
                :item="offer"
            )
//- .main
//-     .container
//-         .main-banner_search
//-             .main-banner_search-title
//-                 |Хочу на море дешево!!!
//-                 img(src="/static/images/icons/icon-swimsuit.png" alt="icon")
//-                 img(src="/static/images/icons/icon-glasses.png" alt="icon")
//-             .main-banner_search-icon
//-         .main-weekly
//-             .main-weekly-title Лучшие предложения недели
//-             .main-weekly-wrap-outer
//-                 .main-weekly-wrap(style="min-width:450px")
//-                     .main-weekly-unit(style="background-image:url(/static/images/main-weekly-01.png)")
//-                         .main-weekly-unit-filter
//-                         .main-weekly-unit-content
//-                             .main-weekly-unit-info 16 часов. Без пересадок. Из Москвы
//-                             a(href="#/").main-weekly-unit-title Комсомольск-на-Амуре
//-                             .main-weekly-unit-price от 6 500 руб.
//-                     .main-weekly-unit(style="background-image:url(/static/images/main-weekly-01.png)")
//-                         .main-weekly-unit-filter
//-                         .main-weekly-unit-content
//-                             .main-weekly-unit-info 16 часов. Без
//-                             a(href="#/").main-weekly-unit-title Кефлавик
//-                             .main-weekly-unit-price от 7 900 руб.
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
//-             .vm-loader(v-if="!offers.length")
//-                 .vm-loader__spin
//-             .card.oneSide(
//-                 v-else
//-                 v-for="offer in offers"
//-             )
//-                 .card-header
//-                     .card-header-info {{ offer.name_auto }}
//-                     .card-header-title
//-                         .card-header-title-unit.card-header-title-unit_form {{ offer.origin.name }}
//-                         .card-header-title-unit.card-header-title-unit_to {{ offer.destination.name }}
//-                 .card-body
//-                     .card-segment
//-                         .card-segment-header
//-                             .card-segment-unit.card-segment-unit_from
//-                                 .card-segment-unit-time {{ offer.date_from | moment('HH:MM')}}
//-                                 .card-segment-unit-title {{ offer.origin.name }}
//-                                 .card-segment-unit-date {{ offer.date_from | moment('DD MMM YYYY, ddd') }}
//-                             .card-segment-unit.card-segment-unit_to
//-                                 .card-segment-unit-time {{ offer.date_to | moment('HH:MM')}}
//-                                 .card-segment-unit-title {{ offer.destination.name }}
//-                                 .card-segment-unit-date {{ offer.date_to | moment('DD MMM YYYY, ddd') }}
//-                         .card-segment-path
//-                             .card-segment-path-unit dme
//-                             .card-segment-path-unit hrb
//-                             .card-segment-path-unit vvo
//-                             .card-segment-path-unit khk

//-                 .card-result
//-                     .card-result-button от ₽ {{ offer.price }}
//-                     .card-result-icons
//-                         .card-result-icons-unit.card-result-icons-unit_wing
//-                         .card-result-icons-unit.card-result-icons-unit_wing
//-                         .card-result-icons-unit.card-result-icons-unit_weight 8
//-                         .card-result-icons-unit.card-result-icons-unit_luggage
</template>

<script lang="ts">
import RoutePage from '@/core/route';
import { Component } from 'vue-property-decorator';
import Card from './Card.vue';
import axios from 'axios';

@Component({
    name: 'offers-page',
    components: {
        'card': Card
    }
})
export default class SearchRoute extends RoutePage {
    title = 'Assign';

    offers: any[] = [];

    getOffers() {
        axios.get('/offers?offer_type=airplane')
            .then(res => {
                this.offers = res.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    created() {
        this.getOffers();
    }
}
</script>

<style lang="postcss">

$filter-width: 420px;

.search {

    &-filter {
        position: fixed;
        width: $filter-width;

        &__wrapper {

        }
    }

    &-content {
        padding-left: calc($filter-width + 24px);
    }
}


</style>
