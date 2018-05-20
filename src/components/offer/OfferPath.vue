<template lang="pug">
.offer-path
    .offer-path__item 
        | {{ String(offer.from_airport.data) }}
    .offer-path__item 
        | {{ String(offer.to_airport.data) }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'offer-path'
})
export default class OfferPath extends Vue {

    @Prop() offer;

}
</script>

<style lang="postcss">
@import 'css/colors';

.offer {

    &-path {
        box: horizontal space-between;
        font-family: 'Roboto', sans-serif;
        padding: 0 12px;
        padding-top: 29px;
        font-size: 10px;
        text-transform: uppercase;
        color: #828282;
        background-color: #F8F8F8;
        border-radius: 3px;
        height: 54px;
        position: relative;

        &:before {
            content: "";
            width: calc(100% - 40px);
            height: 2px;
            background-color: $primary-color;
            position: absolute;
            top: 16px;
            left: 50%;
            transform: translateX(-50%);
        }

        &__item {
            position: relative;

            &:before {
                content: "";
                size: 10px;
                box-sizing: border-box;
                background-color: $primary-color;
                bottom: calc(100% + 10px);
                left: 7px;
                top: -17px;
                position: absolute;
                border-radius: 50%;
                border: 1px solid $primary-color; 
            }
        }
    }
}

</style>
