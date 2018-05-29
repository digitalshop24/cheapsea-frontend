<template lang="pug">
.md-header

  router-link(
    to="/search"
    @click="$router.push"
  )
    span.box-primary.front-search
      | Поиск предложений
      vm-icon search

  vm-divider


  offers-tape(
    :offers="[1,2,3,4,5,6,7,8,9]"
  )
    template(slot="header")
      h1 Предложения по тематике
    .front-best__offer(
      slot="block"
      slot-scope="{ offer }"
    )
      h1 На море, низкие цены
      small
      p от 6500 ₽


  vm-divider

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import OffersTape from '@/components/offers-tape.vue';

@Component({
  components: {
    OffersTape
  }
})
export default class MobileFrontHeader extends Vue {

}
</script>

<style lang="postcss">
@import '@design';

.md-header {

}

.front-search {
  height: 64px;
  box: horizontal middle space-between;
  padding: 12px 16px 12px 20px;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: $primary-bg-dark;
  }
}
</style>
