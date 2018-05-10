<template lang="pug">
.search-route
    app-header(
        title="Поиск предложений"
        backRouteName="front"
    )
    .search
        .container
            .search-wrap
                .search-unit
                    .search-unit-input-wrap
                        vm-input(
                            v-model="searchData.origin.name"
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
                                    @click="select('origin', item)"
                                ) {{ item.name }}
                    .search-unit-input-wrap
                        vm-input(
                            v-model="searchData.destination.name"
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
                                    @click="select('destination', item)"
                                ) {{ item.name }}
                .search-unit
                    .search-unit__date
                        vm-date(
                            v-model="searchData.dateFrom"
                            label="Когда"
                            placeholder="с"
                            closeOnSelect
                            @input="getOffers"
                        )
                        vm-date(
                            v-model="searchData.dateTo"
                            placeholder="по"
                            closeOnSelect
                            @input="getOffers"
                        )
                .search-type
                    .search-type-title Тип предложения
                    .search-type-wrap
                        .search-type-unit.plane(
                            v-for="type in types"
                            :key="type.value"
                            :class="[ type.css, { active: type.value === searchData.offerType }]"
                            @click="select('offerType', type.value)"
                        ) {{ type.title }}
                            .search-type-unit-image

                vm-button.search-submit(
                    :disabled="offers.data.length === 0"
                    raised
                    primary
                    @click="showOffers"
                ) 
                    span(v-if="offers.data.length")
                        | Показать {{ offers.data.length }} предложений
                    span(v-else-if="offers.data.length === 0")
                        | Предложения отсутствуют

                vm-button.search-submit.search-clean(
                    @click="clean"
                ) Очистить
</template>

<script lang="ts">
import {
    Vue,
    Component,
    Prop
} from "vue-property-decorator";
import axios, {
    CancelTokenSource
} from "axios";
import {
    State
} from "vuex-class";
import Offers from "@/core/app/offers";

@Component
export default class SearchRoute extends Vue {
    selecting: boolean = false;
    requesting: boolean = false;
    cancelSource: CancelTokenSource | null = null;
    similarData: any[] = [];
    selectedField: string = "";
    init: boolean = false;

    offers: Offers = new Offers();

    types = [{
            title: "Самолет",
            value: "airplane",
            css: "plane"
        },
        {
            title: "Поезд",
            value: "trane",
            css: "train"
        },
        {
            title: "Тур",
            value: "bus",
            css: "tour"
        },
        {
            title: "Авто",
            value: "car_rent",
            css: "car"
        }
    ];

    @Prop(String) title: string;

    @State searchData;

    select(prop, value) {
        this.searchData[prop] = value;
        this.selecting = false;
        this.similarData = [];
        this.getOffers();
    }

    async getOffers() {

        const { searchData:form } = this;

        const offers = new Offers({
            'destination_id': form.destination.id,
            'origin_id': form.origin.id,
            'offer_type': form.offerType,
            'date_from': form.dateFrom,
            'date_to': form.dateTo
        });

        await offers.get();
        this.offers = offers;
    }

    onInput(input: string) {
        if (this.cancelSource) {
            this.cancelSource.cancel("canceled");
        }

        if (input.length < 2) {
            this.stopSelecting();
            return;
        }

        const token = axios.CancelToken;
        const source = token.source();

        this.cancelSource = source;
        this.requesting = true;

        axios
            .post(
                "https://cheapsea.net/api/cities/autocomplete", {
                    query: input.trim()
                }, {
                    cancelToken: source.token
                }
            )
            .then(res => {
                const data = res.data.slice(0, 100);

                this.selecting = data.length > 0;
                this.similarData = data;
                this.requesting = false;
                this.cancelSource = null;
            })
            .catch(error => {
                if (error.message) {} else {
                    this.similarData = [];
                    this.requesting = false;
                }
            });
    }

    showOffers() {
        // @ts-ignore
        this.$router.push({
            name: 'offers',
            params: {
                offers: this.offers
            }
        });
    }

    stopSelecting() {
        this.similarData = [];
        this.selecting = false;
        this.requesting = false;
    }

    clean() {
        this.$store.state.searchData = {
            destination: {
                id: '',
                name: ''
            },
            origin: {
                id: '',
                name: ''
            },
            offerType: 'airplane',
            dateFrom: '',
            dateTo: ''
        };

        this.getOffers();
    }

    created() {
        this.getOffers();
    }
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
            &__label {
                font-size: 20px;
                text-transform: uppercase;
            }
        }
        &-type-unit {
            cursor: pointer;
            font-size: 10px;
            padding-top: 4px;
        }
        &-unit {
            padding: 28px 24px;
            &__label {
                font-size: 12px;
                font-weight: 500;
                text-transform: uppercase;
                color: #616161;
            }
            &__entry {
                height: 56px;
                box: horizontal space-between;
            }
            &__date {
                box: horizontal bottom;
                .vm-date:first-child {
                    margin-right: 24px;
                }
                .vm-date {
                    flex-grow: 1;
                }
            }
        }
        input {
            font-size: 18px;
            font-family: inherit;
            font-weight: 600;
            border: none;
            outline: none;
        }
        &-submit {
            width: 100%;
            height: 48px !important;
            &.is--primary:not([disabled]) {
                background: #2f80ed !important;
                color: #fff !important;
            }
        }
    }
    
    .vm-input:not(.is--focused) {
        .vm-input__divider-loader {
            display: none;
        }
    }
</style>
