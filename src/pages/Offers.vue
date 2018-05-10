<template lang="pug">
div.route-page
    app-header(
        title="Предложения по запросу"
    )
    .container
        offers(:offers="offers")

</template>

<script lang="ts">
import RoutePage from '@/core/route';
import { Component } from 'vue-property-decorator';
import Search from './Search.vue';
import axios from 'axios';
import Offers from '@/core/app/offers';

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

</style>
