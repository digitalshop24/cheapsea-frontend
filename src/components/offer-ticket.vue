<template lang="pug">
.offer-ticket
    .offer-ticket__header
        h1 {{ title }}

    OfferPath(:offer="offer")

    .offer-ticket__unit
        .offer-ticket__unit-wrapper
            .offer-ticket__point
                h1
                    | {{ offer.origin | json('name') }},
                    | {{ String(offer.from_airport.data) }}
                p
                    | {{ offer.date_from | time }},
                    | {{ offer.date_from | dateWeek }}
            .offer-ticket__point
                h1
                    | {{ offer.destination | json('name') }},
                    | {{ String(offer.to_airport.data) }}
                p
                    | {{ offer.date_to | time }},
                    | {{ offer.date_to | dateWeek }}
        .offer-ticket__unit-time
            | 1 ч

    .offer-ticket__transfer
        span Пересадка
        span 1 ч

    .offer-ticket__unit
        .offer-ticket__unit-wrapper
            .offer-ticket__point
                h1
                    | {{ offer.origin | json('name') }},
                    | {{ String(offer.from_airport.data) }}
                p
                    | {{ offer.date_from | time }},
                    | {{ offer.date_from | dateWeek }}
            .offer-ticket__point
                h1
                    | {{ offer.destination | json('name') }},
                    | {{ String(offer.to_airport.data) }}
                p
                    | {{ offer.date_to | time }},
                    | {{ offer.date_to | dateWeek }}
        .offer-ticket__unit-time
            | 1 ч

    .offer-ticket__body
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import OfferPath from './offer-path.vue';

@Component({
    name: 'offer-ticket',
    components: {
        OfferPath
    }
})
export default class OfferTicket extends Vue {

    @Prop() offer;
    @Prop() title;

}
</script>

<style lang="postcss">
@import 'css/colors';

.offer-ticket {
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.32);
    z-index: 1;

    &:before {
        top: -5px;
        background: radial-gradient(circle, transparent 0px,transparent 1px,transparent 2px,transparent 3px,transparent 4px,#fff 5px,#fff 6px,#fff 14px);
        background-position: 18px -5px;
    }

    &:after {
        bottom: -5px;
        background: radial-gradient(circle, transparent 0px,transparent 3px,transparent 4px,#fff 6px,#fff 14px);
        background-position: 18px 0px;
    }

    &:before, &:after {
        size: 224px 5px;
        content: '';
        position: absolute;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        background-size: 23px 10px;
    }

    &__transfer {
        box: horizontal space-between;
        background: $blue-grey-500;
        color: #FFF;
        font-weight: 500;
        font-size: 12px;
        padding: 12px 16px;
        border-radius: 4px;
        margin: 16px;
    }

    &__header, &__body {

        &:before, &:after {
            content: '';
            position: absolute;
            width: calc((100% - 224px)/2);
            background-color: #FFF;
            height: 5px;
            z-index: 4;
        }
    }

    &__header {
        position: relative;

        &:before {
            bottom:100%;
            left:0;
            border-top-left-radius: 4px;
        }

        &:after {
            bottom:100%;
            right:0;
            border-top-right-radius: 4px;
        }

        h1 {
            text-align: center;
            line-height: 32px;
            font-size: 16px;
            margin: 0;
            font-weight: 500;
            padding: 16px 24px;
        }
    }

    &__body {
        padding: 0 11px;
        padding-top:13px;
        position: relative;

        &:after, &:before {

            top: 100%;

        }

        &:before {
            left: 0;
            border-bottom-left-radius: 4px;
        }

        &:after {
            right: 0;
            border-bottom-right-radius: 4px;
        }
    }

    &__point {

        & + & {
            margin-top: 8px;
        }

        p {
            color: $default-text-light;
        }
    }

    &__unit {
        box: horizontal middle space-between;
        line-height: 20px;
        padding: 0 24px;
        margin-bottom: 12px;

        &-wrapper {
            flex: 1 1 auto;
            padding-right: 16px;
        }

        &-time {
            padding: 0 8px;
            flex: 0 0 auto;
        }

        h1 {
            font-weight: 500;
            font-size: 14px;
        }
    }

    .offer-path {
        margin: 0 16px 24px;
    }
}

</style>
