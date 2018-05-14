<template lang="pug">
.offers
    template
        .card.oneSide(
            v-for="offer in offers.data"
            :key="offer.id"
            
        )
            template(v-if="offer.destination.data.attributes.name")
                .card-header(
                    @click="select(offer)"
                    
                )
                    .card-header-info 2 пересадки. В пути 1 д. 15 ч.
                    .card-header-title
                        .card-header-title-unit.card-header-title-unit_form 
                            | {{ offer.origin.data.attributes.name }}
                        .card-header-title-unit.card-header-title-unit_to 
                            | {{ offer.destination.data.attributes.name }}
                .card-body
                    .card-segment
                        .card-segment-header
                            .card-segment-unit.card-segment-unit_from
                                .card-segment-unit-time {{ offer.date_from | time }}
                                .card-segment-unit-title {{ offer.origin.data.attributes.name }}
                                .card-segment-unit-date {{ offer.date_from | dateWeek }}
                            .card-segment-unit.card-segment-unit_to
                                .card-segment-unit-time {{ offer.date_to | time }}
                                .card-segment-unit-title {{ offer.destination.data.attributes.name }}
                                .card-segment-unit-date {{ offer.date_to | dateWeek }}
                        .card-segment-path
                            .card-segment-path-unit {{ String(offer.from_airport.data) }}
                            .card-segment-path-unit {{ String(offer.from_airport.data) }}
                
                .card-result
                    .card-result-button(
                        @click="select(offer)"
                    ) от ₽ {{ offer.price | money }}
                    .card-result-icons
                        .card-result-icons-unit.card-result-icons-unit_wing
                        .card-result-icons-unit.card-result-icons-unit_wing
                        .card-result-icons-unit.card-result-icons-unit_weight 8
                        .card-result-icons-unit.card-result-icons-unit_luggage

    cs-loader(v-if="offers.processing")
    
    chips(
        v-if="selectedOffer"
        :offer="selectedOffer"
        @close="selectedOffer = null"
    )
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import axios, { CancelTokenSource } from "axios";
import { Offer } from "@/../types/app";
import Offers from "@/core/offers";

@Component
export default class OffersModule extends Vue {
  selectedOffer: Offer | null = null;

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
  }

  beforeDestroy() {
    this.$root.$off("scrollend", this.appendOffers);
  }
}
</script>

<style lang="postcss">
.card-header {
  cursor: pointer;
}

.card-result-button {
  cursor: pointer;
}
</style>
