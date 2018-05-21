<template lang="pug">
.offers

    .offers-header
        span Сначала дешевые
        //- .offers-header__filter(@click="showFilter") Фильтр
        button.offers-header__filter(@click="toggleFilter") Фильтр

    .offers-list
        OfferCard(
            v-for="offer in offers.data"
            :key="offer.id"
            :offer="offer"
            @select="select"
        )
    
    vm-loader.pad(
        v-if="offers.processing"
    )
    
    OfferView(
        v-if="selectedOffer"
        :offer="selectedOffer"
        @close="selectedOffer = null"
    )

    OffersFilter(
        v-if="showFilter"
        @close="toggleFilter"
    )
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Offer } from "@/../types/app";
import Offers from '@/core/offers';
import OfferView from '../offer/OfferView.vue';
import OffersFilter from './OffersFilter.vue';

@Component({
    components: {
        OfferView,
        OffersFilter
    }
})
export default class OffersModule extends Vue {
    selectedOffer: Offer | null = null;
    showFilter: boolean = false;

    @Prop({
        type: Object,
        default() {
            return new Offers();
        }
    })
    offers: Offers;

    select(offer: Offer) {
        this.selectedOffer = offer;
    }

    appendOffers() {
        this.offers.append();
    }

    toggleFilter(value: boolean): void {
        this.showFilter = value;
    }

    created() {
        this.$root.$on("scrollend", this.appendOffers);
        this.offers.get();
    }

    beforeDestroy() {
        this.$root.$off("scrollend", this.appendOffers);
    }
}
</script>

<style lang="postcss">
@import 'css/colors';

.offers {

    &-header {
        box: horizontal space-between middle;
        padding: 16px;
        font-size: 14px;
        font-weight: 600;

        &__filter {
            background: url(/static/images/icons/icon-filters.svg) right 8px center no-repeat;
            font-size: 12px;
            padding-left: 12px;
            padding-right: 32px;
            height: 32px;
            width: 100px;
            font-weight: 600;
            border-radius: 4px;
            border: 2px solid $primary !important;
            color: $primary;
            outline: none;
            cursor: pointer;
        }
    }

    &-list {
        padding: 4px 8px;
    }
}
</style>
