<template lang="pug">
.search-filter
    .search-filter__type
        .search-filter__type-item(
            v-for="type in types"
            :class="{ 'is--active': type.value === offerType }"
            @click="clickOfferType(type.value)"
        )
            h1 {{ type.title }}
            component(:is="type.icon")
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
        
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SvgTrain from '@/assets/train.svg';
import SvgPlane from '@/assets/plane.svg';
import SvgCar from '@/assets/car.svg';
import SvgTour from '@/assets/tour.svg';
import acc from 'accounting';

@Component({
    name: 'card'
})
export default class SearchFilter extends Vue {
    offerType: string = 'airplane';

    types = [{
        title: 'Самолет',
        value: 'airplane',
        icon: SvgPlane
    }, {
        title: 'Поезд',
        value: 'trane',
        icon: SvgTrain
    }, {
        title: 'Тур',
        value: 'bus',
        icon: SvgTour
    }, {
        title: 'Авто',
        value: 'car_rent',
        icon: SvgCar
    }]

    get filterString(): string {

        const filters = {
            'offer_type': this.offerType
        };

        return Object.keys(filters)
                .filter(prop => {
                    return !!filters[prop];
                })
                .map(prop => `${prop}=${filters[prop]}`)
                .join('&');
    }

    clickOfferType(type: string) {
        this.offerType = type;
        this.apply();
    }

    apply() {
        this.$emit('apply', this.filterString);
    }

    created() {
        this.apply();
    }
}
</script>

<style lang="postcss">
.search-filter {

    &__type {
        box: horizontal;
        border-radius: 4px;
        height: 80px;
        box-shadow: $shadow-2;
        margin-bottom: 16px;

        &-item {
            flex: 1 1 25%;
            box: vertical top center;
            height: 100%;
            cursor: pointer;
            position: relative;

            &.is--active {
                color: $accent-color;

                &:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: $accent-color;
                }

                svg {
                    color: $accent-color;
                }
            }

            &:hover {
                
                svg {
                    color: $accent-color;
                }
            }

            h1 {
                font-size: 12px;
                line-height: 40px;
                font-weight: 600;
                text-transform: uppercase;
                flex: 0 0 auto;
            }

            svg {
                padding: 0 0 16px;
                color: $primary-color;
            }
        }
    }
}
</style>
