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
import { Component } from 'vue-property-decorator';
import RoutePage from '@/core/route';
import OffersContainer from '@/core/offers';

@Component({
    name: 'offers-page'
})
export default class OffersRoute extends RoutePage {

    get offers() {
        return this.$route.params.offers;
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
