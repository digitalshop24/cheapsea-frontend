<template lang="pug">
.search.route-page
    app-header.box-primary(
        title="Поиск предложений"
        backRouteName="front"
    )

    .box-content
        vm-form(box size="2")
            .xs-12
                SelectCity(
                    label="Откуда"
                )
            .xs-12
                SelectCity(
                    label="Куда"
                )
            .xs-12.sm-6
                vm-date(
                   v-model="searchData.dateFrom"
                   label="Дата отъезда"
                   closeOnSelect
                   @input="getOffers"
                   size="2"
                )
            
            .xs-12.sm-6
                vm-date(
                    v-model="searchData.dateTo"
                    label="Обратно"
                    closeOnSelect
                    @input="getOffers"
                    size="2"
                )
        .search-wrap
            .search-type
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

            //- vm-button.search-submit.search-clean(
            //-     @click="clean"
            //- ) Очистить
</template>

<script lang="ts">
import Offers from "@/core/offers";
import dict from '@/config.json';
import axios, { CancelTokenSource, Cancel } from "axios";
import { snackbar } from 'vue-mapp/es5/snackbar';
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class SearchRoute extends Vue {
    // selecting: boolean = false;
    // requesting: boolean = false;
    // cancelSource: CancelTokenSource | null = null;
    // similarData: any[] = [];
    // selectedField: string = "";
    init: boolean = false;

    // changed: boolean = false;

    @State searchData;

    form

    offers: Offers = new Offers();

    types = dict.offerTypes;

    @Prop(String) title: string;

    

    select(prop, value) {
        this.searchData[prop] = value;
        // this.selecting = false;
        // this.similarData = [];
        this.getOffers();
    }

    async getOffers() {

        // const { searchData:form } = this;

        // const offers = new Offers({
        //     'destination_id': form.destination.id,
        //     'origin_id': form.origin.id,
        //     'offer_type': form.offerType,
        //     'date_from': form.dateFrom,
        //     'date_to': form.dateTo
        // });

        // await offers.get();
        // this.offers = offers;
    }

    onInput(input: string) {
        console.log('dsdsd', input)

        // if (this.cancelSource) {
        //     this.cancelSource.cancel("canceled");
        // }

        if (input.length < 2) {
            this.stopSelecting();
            return;
        }

        console.log('on input', input)

        const token = axios.CancelToken;
        const source = token.source();

        // this.cancelSource = source;
        // this.requesting = true;

        axios
            .post(
                "https://cheapsea.net/api/cities/autocomplete", {
                    query: input.trim()
                }, {
                    cancelToken: source.token,
                    timeout: 5000
                }
            )
            .then(res => {

                const data = res.data.slice(0, 100);

                console.log(data);
                // this.changed = true;
                // this.selecting = data.length > 0;
                // this.similarData = data;
                // this.requesting = false;
                // this.cancelSource = null;
            })
            .catch(error => {
                

                if (error.message && error.message !== 'canceled') {
                    // this.requesting = false;
                    snackbar({
                        text: error.message
                    })
                } else {
                    // this.similarData = [];
                }
            })
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
        // this.similarData = [];
        // this.selecting = false;
        // this.requesting = false;
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

    & > .vm-input {
        font-size: 20px;
    }
    
    .vm-form {
        box: horizontal wrap;

        & > div {
            padding: 8px;
        }
    }

    .vm-input__divider-loader {
        background: $accent-color;
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
