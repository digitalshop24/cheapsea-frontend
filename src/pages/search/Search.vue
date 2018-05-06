<template lang="pug">
.search
    search-filter(
        @apply="applyFilter"
    )
    .search-content
        template
            search-card(
                v-for="offer in offers"
                :key="offer.id"
                :offer="offer"
                @select="selectOffer"
            )
        cs-loader(v-if="processing")
        .search-content__nodata(
            v-else-if="offers.length === 0"
        ) Информация не найдена
    
    vm-modal(
        v-if="selectedOffer"
        @close="closeModal"
    )
        search-card-modal(
            :offer="selectedOffer"
        )
</template>

<script lang="ts">
import RoutePage from '@/core/route';
import { Component } from 'vue-property-decorator';
import Card from './SearchCard.vue';
import Filter from './SearchFilter.vue';
import CardModal from './SearchCardModal.vue';
import axios from 'axios';

@Component({
    name: 'offers-page',
    components: {
        'search-card': Card,
        'search-filter': Filter,
        'search-card-modal': CardModal
    }
})
export default class SearchRoute extends RoutePage {
    title = 'Assign';
    processing: boolean = false;
    page: number = 1;
    filter: string = '';
    offers: any[] = [];
    selectedOffer = null;

    getOffers() {
        const { page, filter } = this;

        this.processing = true;
        
        axios.get(`/offers?${filter}&page=${page}`)
            .then(res => {
                if (page > 1) {
                    this.offers = this.offers.concat(res.data);
                } else {
                    this.offers = res.data;
                }
                
                this.processing = false;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    appendOffers() {
        this.page++;
        this.getOffers();
    }

    applyFilter(filter: string) {
        this.filter = filter;
        this.page = 1;
        this.getOffers();
    }

    selectOffer(offer) {
        this.selectedOffer = offer;
    }

    closeModal() {
        this.selectedOffer = null;
    }

    created() {
        this.$root.$on('scrollend', this.appendOffers);
    }

    beforeDestroy() {
        this.$root.$off('scrollend', this.appendOffers);
    }
}
</script>

<style lang="postcss">

$filter-width: 420px;

.search {

    &-filter {
        position: fixed;
        width: $filter-width;

        &__wrapper {

        }
    }

    &-content {
        padding-left: calc($filter-width + 24px);

        &__nodata {
            text-align: center;
            padding-top: 24px;
        }
    }
}


</style>
