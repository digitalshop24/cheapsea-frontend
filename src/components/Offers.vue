<template lang="pug">
.offers

    .offers-header
        span Сначала дешевые
        //- .offers-header__filter(@click="showFilter") Фильтр
        button.offers-header__filter(@click="toggleFilter(true)") Фильтр

    .offers-list
        OfferCard(
            v-for="offer in offers.data"
            :key="offer.id"
            :offer="offer"
            @select="select"
        )

    vm-loader(v-if="offers.processing")
    
    OfferView(
        v-if="selectedOffer"
        :offer="selectedOffer"
        @close="selectedOffer = null"
    )

    OfferFilter(
        v-if="showFilter"
        @close="toggleFilter(false)"
    )
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Offer } from "@/../types/app";
import Offers from "@/core/offers";
import OfferCard from './OfferCard.vue';
import OfferView from './OfferView.vue';
import OfferFilter from './OfferFilter.vue';

@Component({
    components: {
        OfferCard,
        OfferView,
        OfferFilter
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
        console.log(offer);
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
            padding-right: 32px;
            font-size: 12px;
            padding-left: 12px;
            height: 32px;
            line-height: 32px;
            width: 100px;
            border-radius: 4px;
            border: 1px solid $primary;
            color: $primary;
        }
    }

    &-list {
        padding: 4px 8px;
    }
}
</style>
