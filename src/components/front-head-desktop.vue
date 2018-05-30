<template lang="pug">
.md-header
  .md-header__wrapper.container
    vm-tabs(align="justify")
      vm-tab(
        v-for="(offer, idx) in offers"
        :key="idx"
        :label="offer.label"
      )
        front-head-tab(
          :title="offer.title"
          :description="offer.description"
          :count="offer.count"
          :price="offer.price"
        )
    .md-header__search.bg-light
      vm-input(label="Откуда")
      vm-input(label="Куда")
      vm-date(label="Дата заезда")
        router-link(to="search")
          vm-button Поиск
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import FrontHeadTab from './front-head-tab.vue';

@Component({
  components: {
    FrontHeadTab
  }
})
export default class DesktopFrontHeader extends Vue {


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
      label: 'до 50000 ₽'
    },
    {
      label: 'ЧМФ 2018'
    }
  ]
}
</script>

<style lang="postcss">
@import '@design';

.md-header {
  height: 560px;
  overflow: hidden;
  position: relative;
  background: url(/static/images/front-head.jpg);
  background-size: cover;
  border-style: solid;
  border-width: 0 0 1px;

  &__wrapper {
    height: 100%;
    padding: 40px 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  &__search {
    box: horizontal middle right;
    height: 104px;
    background: #FFF;
    border-radius: 4px;
    padding: 24px;
  }

  img {
    width: 100%;
  }

  .vm-tab {
    flex-basis: 25%;
    margin-right: 24px;

    &:last-child {
      margin: 0;
    }

    &:after {
      background: currentColor !important;
    }

    &:not(.is--active) {

      .vm-tab__label {
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

  .vm-tab__label {
    text-transform: none;
    font-weight: 500;
    font-size: 16px;
  }

  .vm-tabs__header {
    border: none;
  }
}
</style>
