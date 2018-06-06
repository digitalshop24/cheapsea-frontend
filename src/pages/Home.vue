<template lang="pug">

.front
  home-mobile(v-if="layout.smallView")
  home-desktop(v-else)

  offers-tape(
    :class="$style.best"
    :offers="[1,2,3,4,5,6,7,8,9]"
    :headCenter="!layout.smallView"
  )
    template(slot="header")
      h1 Лучшие предложения недели
      vm-icon star

    div(
      slot="block"
      slot-scope="{ offer }"
      :class="$style.bestOffer"
    )
      h1 Комсомольск-на-Амуре
      small 16 часов. Без пересадок. Из Москвы
      p от 6500 ₽

  vm-divider

  vm-tabs.bg-dark(
    :class="$style.tabs"
    align="center"
  )
    vm-tab(label="Турция")
    vm-tab(label="Индия")
    vm-tab(label="Ю.Америка")
    vm-tab(label="Китай")
    vm-tab(label="Япония")

  offers-list(:class="$style.offersList")

</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import RoutePage from "@/core/route";
import HomeDesktop from '@/components/home-desktop.vue';
import HomeMobile from '@/components/home-mobile.vue';
import OffersTape from '@/components/offers-tape.vue';
import OffersList from '@/components/offers-list.vue';

@Component({
  components: {
    HomeDesktop,
    HomeMobile,
    OffersTape,
    OffersList
  }
})
export default class HomeRoute extends RoutePage {
  @State layout;
}
</script>

<style lang="postcss" module>
@import '@design';


.best {

  :global(.vm-icon) {
    color: $orange-600;
    margin-left: 16px;
  }
}

.bestOffer {
  border-radius: 4px;
  width: 256px;
  background: rgba(0,0,0,.8);
  height: 124px;
  color: #FFF;
  padding: 16px;
  background: $orange-a700;
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

  h2 {
    font-size: 12px;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    bottom: 16px;
    left: 16px;
    margin: 0;
  }

  small {
    font-weight: 500;
  }
}

.tabs {
  margin-bottom: 32px;

  :global(.vm-tab) {
    padding: 0 32px;
  }

  :global(.vm-tab__label) {
    text-transform: none;
    font-weight: 500;
  }
}

.offersList {
  padding: 0 8px 40px;

  @media (--md-view) {
    padding: 0 0 40px;
  }
}

</style>
