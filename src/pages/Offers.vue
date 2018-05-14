<template lang="pug">
div.route-page.offers-page
    app-header.box(
        title="Предложения по запросу"
        @back="$router.push('/search')"
    )
    .container
        offers(:offers="offers")

</template>

<script lang="ts">
import RoutePage from '@/core/route';
import { Component } from 'vue-property-decorator';
import Search from './Search.vue';
import axios from 'axios';
import Offers from '@/core/offers';

@Component({
    name: 'offers-page'
})
export default class OffersRoute extends RoutePage {

    offers: Offers = new Offers();

    created() {
        // @ts-ignore
        this.offers = this.$route.params.offers;
    }

    mounted() {
        this.$root.$el.scrollTop = 0;
    }
}
</script>

<style lang="postcss">

.offers-page {

    .container {
        padding: 16px;
    }
}

</style>
