<template lang="pug">
.search-route
    header-back(
        title="Поиск предложений"
        backRouteName="front"
    )
    .search
        .container
            form.search-wrap
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
                        .search-type-unit.plane(
                            v-for="type in types"
                            :key="type.value"
                            :class="[ type.css, { active: type.value === offerType }]"
                            @click="offerType = type.value"
                        ) {{ type.title }}
                            .search-type-unit-image
                input(type="submit" value="Показать 16 предложений").button.button_blue
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SearchRoute extends Vue {

    offerType: string = 'airplane';

    types = [{
        title: 'Самолет',
        value: 'airplane',
        css: 'plane'
    }, {
        title: 'Поезд',
        value: 'trane',
        css: 'train'
    }, {
        title: 'Тур',
        value: 'bus',
        css: 'tour'
    }, {
        title: 'Авто',
        value: 'car_rent',
        css: 'car'
    }]

    @Prop(String)
    title: string;
}
</script>

<style lang="postcss">

.search-type-unit {
    cursor: pointer;
}

</style>