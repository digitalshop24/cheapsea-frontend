<template lang="pug">
.offers-page
    Header.box-primary(
        type="back"
        title="Предложения по запросу"
        @back="$router.push('/search')"
    )
    Offers(:offers="offers")

</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import RoutePage from '@/core/route';

@Component({
    name: 'offers-page',
    inheritAttrs: false
})
export default class OffersRoute extends RoutePage {

    get offers() {
        return this.$route.params.offers;
    }
}
</script>

<style lang="postcss">

</style>
