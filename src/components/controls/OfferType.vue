<template lang="pug">
.offer-type
    .offer-type__item(
        v-for="type in types"
        :class="{ 'box-primary': type.value === value }"
        @click="click(type.value)"
    )
        h1 {{ type.title }}
        component(:is="'svg-' + type.value")
</template>

<script lang="ts">
import dict from '@/config.json';
import SvgTrain from '@/assets/train.svg';
import SvgPlane from '@/assets/plane.svg';
import SvgCar from '@/assets/car.svg';
import SvgTour from '@/assets/tour.svg';
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
    name: 'control',
    components: {
        'svg-trane': SvgTrain,
        'svg-airplane': SvgPlane,
        'svg-car_rent': SvgCar,
        'svg-bus': SvgTour
    }
})
export default class Control extends Vue {
    types = dict.offerTypes;

    @Prop(String) value: string;

    click(value) {
        this.$emit('input', value);
    }
}
</script>

<style lang="postcss">

.offer-type {
    box: horizontal;
    border-radius: 4px;
    height: 80px;
    margin-bottom: 16px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;

    &__item {
        flex: 1 1 25%;
        box: vertical top center;
        height: 100%;
        cursor: pointer;
        position: relative;
        border-width: 0 1px 0 0;
        border-style: solid;

        &:last-child {
            border: none;
        }

        &.box-primary {

            svg {
                color: #FFF;
            }
        }

        h1 {
            font-size: 12px;
            line-height: 24px;
            font-weight: 600;
            text-transform: uppercase;
            flex: 0 0 auto;
        }

        svg {
            padding: 14px;
            color: $primary-color;
        }
    }
}
</style>

