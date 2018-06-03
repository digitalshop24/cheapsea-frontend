<template lang="pug">
div(:class="$style.root")
  .container(:class="$style.wrapper")
    vm-tabs(
      align="justify"
      :class="$style.tabs"
    )
      vm-tab(
        v-for="(offer, idx) in offers"
        :key="idx"
        :label="offer.label"
      )
        home-desktop-tab(
          :title="offer.title"
          :description="offer.description"
          :count="offer.count"
          :price="offer.price"
        )
    home-desktop-search
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import HomeDesktopTab from './home-desktop-tab.vue';
import HomeDesktopSearch from './home-desktop-search.vue';

@Component({
  components: {
    HomeDesktopTab,
    HomeDesktopSearch
  }
})
export default class HomeDesktop extends Vue {

  offers: any[] = [
    {
      label: 'На море',
      title: 'Отдых на море',
      description: 'Дeшeвый oтдыx нa мope мoгут пpeдлoжить вaм мнoгиe cтpaны в Eвpoпe, Aзии и Aмepикe: цeны нa eду, oтeли и paзвлeчeния дaжe пpи нынeшнeм куpce pубля и дoллapa тaм ocтaютcя пpиeмлeмыми.',
      price: '24800',
      count: '195'
    },
    {
      label: 'Горы',
      title: 'Горный туризм',
      description: 'Пожалуй, среди всех видов туризма только горный туризм рождает такое же сильное чувство как любовь, и если оно возникает, то захватывает раз и навсегда, потому что равнодушные не идут в горы, они остаются на равнинe.',
      price: '48900',
      count: '98'
    },
    {
      label: 'до 50000 ₽',
      title: 'Цена до 50000 ₽',
      description: 'Предложения до 50000 ₽',
      price: '23500',
      count: '150'
    },
    {
      label: 'ЧМФ 2018',
      title: 'ЧМФ 2018',
      description: '21 чемпионат мира по футболу ФИФА, финальная часть которого пройдёт в России с 14 июня по 15 июля 2018 года. Россия в первый раз в своей истории станет страной-хозяйкой мирового чемпионата по футболу, кроме того, он впервые будет проведён в Восточной Европе.',
      price: '23500',
      count: '150'
    }
  ]
}
</script>

<style lang="postcss" module>
@import '@design';

.root {
  height: 600px;
  overflow: hidden;
  position: relative;
  background: url(/static/images/front-head.jpg);
  background-size: cover;
  border-style: solid;
  border-width: 0 0 1px;
}

.wrapper {
  padding: 40px 0;
}

.tabs {

  :global(.vm-tab) {
    flex-basis: 25%;
    margin-right: 24px;

    &:last-child {
      margin: 0;
    }

    &:after {
      background: currentColor !important;
    }

    &:not(.is--active) {

      :global(.vm-tab__label) {
        color: $default-text !important;
      }

      &:after {
        content: '';
        height: 1px;
      }
    }

    &:nth-child(1) {
      color: $blue-600;
    }

    &:nth-child(2) {
      color: $orange-600;
    }

    &:nth-child(3) {
      color: $green-600;
    }

    &:nth-child(4) {
      color: $red-600;
    }
  }

  :global(.vm-tab__label) {
    text-transform: none;
    font-weight: 500;
    font-size: 16px;
  }

  :global(.vm-tabs__header) {
    border: none;
  }
}
</style>
