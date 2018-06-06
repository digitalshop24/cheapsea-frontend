<template lang="pug">
div(:class="$style.root")

  router-link(
    to="/search"
    @click="$router.push"
  )
    span.box-primary.action(
      :class="$style.search"
    )
      | Поиск предложений
      vm-icon search

  vm-divider


  offers-tape(
    :offers="[1,2,3,4,5,6,7,8,9]"
  )
    template(slot="header")
      h1 Предложения по тематике

    div(
      :class="$style.collection"
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

<style lang="postcss" module>
@import '@design';

.search {
  height: 64px;
  box: horizontal middle space-between;
  padding: 12px 16px 12px 20px;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  font-weight: 600;
}

.collection {
  border-radius: 4px;
  width: 256px;
  background: rgba(0,0,0,.8);
  height: 124px;
  color: #FFF;
  padding: 16px;
  background: $blue-500;
  z-index: 5;
  box-shadow: $shadow-1;

  &:after {
    content: '';
    background: rgba(0,0,0,.54);
    z-index: -1;
    size: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }

  h1 {
    font-size: 16px;
    margin: 0 0 6px;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    bottom: 16px;
    left: 16px;
    margin: 0;
  }
}
</style>
