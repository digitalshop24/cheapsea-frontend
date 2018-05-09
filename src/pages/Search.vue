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
                        vm-input(
                            v-model="form.from"
                            slot="trigger"
                            label="Откуда" 
                            :loading="requesting"
                            @input="onInput"
                            @focus="selectedField = 'from'"
                        )

                        vm-popup(
                            v-if="selecting && selectedField === 'from'"
                            position="bottom"
                            floatTrigger
                            fillTrigger
                            nooverlay
                            height="320"
                            @close="stopSelecting"
                            @outclick="stopSelecting"
                        )
                            vm-list
                                vm-list-item(
                                    v-for="(item, idx) in similarData"
                                    :key="idx"
                                    @click="select('from', item.name)"
                                ) {{ item.name }}
                    .search-unit-input-wrap
                        vm-input(
                            v-model="form.to"
                            slot="trigger"
                            label="Куда" 
                            :loading="requesting"
                            @input="onInput"
                            @focus="selectedField = 'to'"
                        )

                        vm-popup(
                            v-if="selecting && selectedField === 'to'"
                            position="bottom"
                            floatTrigger
                            fillTrigger
                            nooverlay
                            height="320"
                            @close="stopSelecting"
                            @outclick="stopSelecting"
                        )
                            vm-list
                                vm-list-item(
                                    v-for="(item, idx) in similarData"
                                    :key="idx"
                                    @click="select('to', item.name)"
                                ) {{ item.name }}
                .search-unit
                    .search-unit-input-wrap.filled.search-unit-input-wrap_date
                        vm-date(
                            label="Когда"
                        )
                        //- input(type="date" value="2018-04-10")
                        //- span.search-unit-input-placeholder Когда
                .search-type
                    .search-type-title Тип предложения
                    .search-type-wrap
                        .search-type-unit.plane(
                            v-for="type in types"
                            :key="type.value"
                            :class="[ type.css, { active: type.value === form.offerType }]"
                            @click="form.offerType = type.value"
                        ) {{ type.title }}
                            .search-type-unit-image
                input(type="submit" value="Показать 16 предложений").button.button_blue
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import axios, { CancelTokenSource } from 'axios';

@Component
export default class SearchRoute extends Vue {

    selecting: boolean = false;
    requesting: boolean = false;
    cancelSource: CancelTokenSource | null = null;
    similarData: any[] = [];
    selectedField: string = '';

    form = {
        from: '',
        to: '',
        offerType: 'airplane'
    }

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

    select(prop, value) {
        this.form[prop] = value;
        this.selecting = false;
        this.similarData = [];
    }

    onInput(input: string) {
        
        if (this.cancelSource) {
            this.cancelSource.cancel('canceled');
        }

        if (input.length < 2) {
            this.stopSelecting();
            return;
        }

        const token = axios.CancelToken;
        const source = token.source();

        this.cancelSource = source;
        this.requesting = true;

        axios.post('https://cheapsea.net/api/cities/autocomplete', 
            {
                query: input.trim()
            }, {
                cancelToken: source.token
            })
            .then(res => {
                const data = res.data.slice(0, 100);

                this.selecting = data.length > 0;
                this.similarData = data;
                this.requesting = false;
                this.cancelSource = null;
            })
            .catch(error => {
                
                if (error.message) {
                    
                } else {
                    this.similarData = [];
                    this.requesting = false;
                }
            });
    }

    stopSelecting() {
        this.similarData = [];
        this.selecting = false;
        this.requesting = false;
    }

    @Prop(String)
    title: string;
}
</script>

<style lang="postcss">

.search {

    .vm-input__divider-loader {
        background: $accent-color;
    }

    .vm-input {

        &__container {
            height: 56px;
        }

        &__entry {
            font-size: 22px;
            font-family: inherit;
            font-weight: 600;
        }

        &__label {
            font-size: 22px;
            text-transform: uppercase;
        }
    }

    &-type-unit {
        cursor: pointer;
        font-size: 10px;
        padding-top: 4px;
    }

    &-unit {
        padding: 32px 26px;
    }
}


.vm-input:not(.is--focused) {
    
    .vm-input__divider-loader {
        display: none;
    }
}

</style>
