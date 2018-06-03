<template lang="pug">
.container(:class="$style.root")


  component(
    v-if="!layout.smallView || showFilter"
    :is="layout.smallView ? 'app-modal' : 'div'"
    :class="$style.filter"
  )
    offers-filter

  div(:class="$style.wrapper")
    div(:class="$style.header")
      span Сначала дешевые
      button(
        v-if="layout.smallView"
        :class="$style.headerFilter"
        @click="showFilter = !showFilter"
      ) Фильтр

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

    //- OfferView(
    //-     v-if="selectedOffer"
    //-     :offer="selectedOffer"
    //-     @close="selectedOffer = null"
    //- )
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from 'vuex-class';
import { Offer } from "@/../types/app";
import Offers from '@/core/offers';
import OffersFilter from './offers-filter.vue';
import AppModal from '@/components/app-modal.vue';

@Component({
  components: {
    OffersFilter,
    AppModal
  }
})
export default class OffersModule extends Vue {
  selectedOffer: Offer | null = null;
  showFilter: boolean = false;

  @State layout;

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


    created() {
        this.$root.$on("scrollend", this.appendOffers);
        this.offers.get();
        console.log(this)
    }

    beforeDestroy() {
        this.$root.$off("scrollend", this.appendOffers);
    }

}
</script>

<style lang="postcss" module>
@import 'css/colors';

.root {
  box: horizontal;
}

.wrapper {
  width: 100%;
  flex: 1 1 auto;

  @media (--md-view) {
    margin-left: 24px;
  }
}

.header {
  box: horizontal space-between middle;
  padding: 16px;
  font-size: 14px;
  font-weight: 600;
}

.headerFilter {
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

.filter {
  width: 300px;
}
</style>
