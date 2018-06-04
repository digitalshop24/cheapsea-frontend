<template lang="pug">
div(:class="$style.root")
  Header.box-primary(
    type="back"
    title="Предложения по запросу"
    @back="$router.push('/search')"
  )
  offers-list(
    :offers="offers"
  )

</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import RoutePage from '@/core/route';
import OffersList from '@/components/offers-list.vue';

@Component({
    name: 'offers-page',
    inheritAttrs: false,
    components: {
      OffersList
    }
})
export default class OffersRoute extends RoutePage {

    get offers() {
        return this.$route.params.offers;
    }
}
</script>

<style lang="postcss" module>


</style>
