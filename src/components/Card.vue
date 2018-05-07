<template lang="pug">
.card.oneSide(v-if="offer")
    .card-header(
        @click="select"
    )
        .card-header-info 2 пересадки. В пути 1 д. 15 ч.
        .card-header-title
            .card-header-title-unit.card-header-title-unit_form {{ offer.origin.name }}
            .card-header-title-unit.card-header-title-unit_to {{ offer.destination.name }}
    .card-body
        .card-segment
            .card-segment-header
                .card-segment-unit.card-segment-unit_from
                    .card-segment-unit-time {{ offer.date_from | time }}
                    .card-segment-unit-title {{ offer.origin.name }}
                    .card-segment-unit-date {{ offer.date_from | dateWeek }}
                .card-segment-unit.card-segment-unit_to
                    .card-segment-unit-time {{ offer.date_to | time }}
                    .card-segment-unit-title {{ offer.destination.name }}
                    .card-segment-unit-date {{ offer.date_to | dateWeek }}
            .card-segment-path
                .card-segment-path-unit {{ String(offer.from_airport) }}
                .card-segment-path-unit {{ String(offer.from_airport) }}
    
    .card-result
        .card-result-button(
            @click="select"
        ) от ₽ {{ offer.price | money }}
        .card-result-icons
            .card-result-icons-unit.card-result-icons-unit_wing
            .card-result-icons-unit.card-result-icons-unit_wing
            .card-result-icons-unit.card-result-icons-unit_weight 8
            .card-result-icons-unit.card-result-icons-unit_luggage

//- .card.twoSides
    //-     .card-header
    //-         .card-header-info 2 пересадки. В пути 1 д. 15 ч.
    //-         .card-header-title
    //-             .card-header-title-unit.card-header-title-unit_form Самарканд
    //-             .card-header-title-unit.card-header-title-unit_to Комсомольск-на-Амуре
    //-     .card-body
    //-         .card-segment
    //-             .card-segment-header
    //-                 .card-segment-unit.card-segment-unit_from
    //-                     .card-segment-unit-time 20:55
    //-                     .card-segment-unit-title Самарканд
    //-                     .card-segment-unit-date 26 Апр 2018, Чт
    //-                 .card-segment-unit.card-segment-unit_to
    //-                     .card-segment-unit-time 09:35
    //-                     .card-segment-unit-title Комсомольск-на-Амуре
    //-                     .card-segment-unit-date 27 Апр 2018, Пт
    //-             .card-segment-path
    //-                 .card-segment-path-unit dme
    //-                 .card-segment-path-unit hrb
    //-                 .card-segment-path-unit vvo
    //-                 .card-segment-path-unit khk
    //-         .card-segment
    //-             .card-segment-header
    //-                 .card-segment-unit.card-segment-unit_from
    //-                     .card-segment-unit-time 12:31
    //-                     .card-segment-unit-title Комсомольск-на-Амуре
    //-                     .card-segment-unit-date 26 Апр 2018, Чт
    //-                 .card-segment-unit.card-segment-unit_to
    //-                     .card-segment-unit-time 21:47
    //-                     .card-segment-unit-title Самарканд 
    //-                     .card-segment-unit-date 27 Апр 2018, Пт
    //-             .card-segment-path
    //-                 .card-segment-path-unit dme
    //-                 .card-segment-path-unit hrb
    //-                 .card-segment-path-unit vvo
    //-                 .card-segment-path-unit khk
    //-     .card-result
    //-         .card-result-button от ₽ 926 700
    //-         .card-result-icons
    //-             .card-result-icons-unit.card-result-icons-unit_wing
    //-             .card-result-icons-unit.card-result-icons-unit_wing
    //-             .card-result-icons-unit.card-result-icons-unit_weight 8
    //-             .card-result-icons-unit.card-result-icons-unit_luggage
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SvgArrow from '@/assets/arrow.svg';
import acc from 'accounting';

@Component({
    name: 'card',
    components: {
        'svg-arrow': SvgArrow
    }
})
export default class SearchCard extends Vue {

    @Prop() 
    offer;

    select() {
        this.$emit('select', this.offer);
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
