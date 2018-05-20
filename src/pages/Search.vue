<template lang="pug">
.search
    
    app-header.box-primary(
        type="back"
        title="Поиск предложений"
        @back="$router.push('/front')"
    )
        vm-button(
            icon="refresh"
            slot="right"
            @click="clear"
        )

    .search-content.box-content
        vm-form(box size="2")
            .xs-12
                SelectCity(
                    v-model="searchData.origin_id"
                    label="Откуда"
                    @select="getOffers"
                )
            .xs-12
                SelectCity(
                    v-model="searchData.destination_id"
                    label="Куда"
                    @select="getOffers"
                )
            .xs-12.sm-6
                vm-date(
                   v-model="searchData.date_from"
                   label="Дата отъезда"
                   closeOnSelect
                   @select="getOffers"
                )
            .xs-12.sm-6
                vm-date(
                    v-model="searchData.date_to"
                    label="Обратно"
                    closeOnSelect
                    @select="getOffers"
                )
        .xs-12
            Control(
                :value="searchData.offerType"
                @input="select('offerType', $event)"
            )
        
        .xs-12.search-submit
            vm-button(
                :disabled="offers.data.length === 0"
                raised
                primary
                @click="showOffers"
            ) 
                span(v-if="offers.data.length")
                    | Показать {{ offers.data.length }} предложений
                span(v-else-if="offers.data.length === 0")
                    | Предложения отсутствуют
</template>

<script lang="ts">
import Offers from "@/core/offers";
import { OffersSearchData } from '@/../types/app';
import axios, { CancelTokenSource, Cancel } from "axios";
import SvgTrain from '@/assets/train.svg';
import SvgPlane from '@/assets/plane.svg';
import SvgCar from '@/assets/car.svg';
import SvgTour from '@/assets/tour.svg';
import Control from '@/components/Control.vue';
import { snackbar } from 'vue-mapp/es5/snackbar';
import { Vue, Component, Prop } from "vue-property-decorator";

const searchDefaults = {
    'destination_id': '',
    'origin_id': '',
    'offer_type': 'airplane',
    'date_from': '',
    'date_to': ''
};

@Component({
    name: 'search-route',
    components: {
        Control
    }
})
export default class SearchRoute extends Vue {

    searchData: OffersSearchData = searchDefaults;

    offers: Offers = new Offers();

    @Prop(String) title: string;


    select(prop, value) {
        this.searchData[prop] = value;
        this.getOffers();
    }

    async getOffers() {
        const offers = new Offers(this.searchData);

        await offers.get();
        this.offers = offers;
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

    clear() {
        this.searchData = searchDefaults;
        this.getOffers();
    }

    created() {
        this.getOffers();
    }
}
</script>

<style lang="postcss">


.search {

    .xs-12 > .vm-input  {
        font-size: 18px;
    }
    
    .vm-form {
        box: horizontal wrap;
        margin-top: 8px;
    }

    .vm-input__right {

        .vm-button:not(:hover) {
            opacity: .4;
        }
    }

    &-content {
        padding: 8px;
    }

    &-submit {
        
        .vm-button {
            height: 56px;
            width: 100%;
            font-weight: 600;
        }
    }

    .xs-12 {
        padding: 12px 8px;
    }

    .vm-input__container {

        input {
            font-size: 19px;
        }
    }

    .vm-input__label {
        font-size: 19px;
    }
}
</style>
