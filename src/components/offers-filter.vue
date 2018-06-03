<template lang="pug">

div(:class="$style.root")
  vm-card(:class="$style.card")
    offer-type(
      v-model="form.offerType"
      :class="$style.offerType"
    )

    div(:class="$style.filter")
      div(:class="$style.filterPrice")
        p от
        span 25 000 ₽
      div(:class="$style.filterDivider")
      div(:class="$style.filterPrice")
        p до
        span 35 000 ₽

    div(:class="$style.filterSlider")
      div(:class="$style.filterSliderButton")
      div(:class="$style.filterSliderButton")

    vm-toggle(
      :class="$style.param"
      iconRight
    ) Виза не нужна

    div(:class="$style.param")
      span Куда: Вся Исландия — 145

    div(:class="$style.param")
      span Откуда: Москва

    div(:class="$style.param")
      span Все авиакомпании — 15

    vm-toggle(
      :class="$style.param"
      iconRight
    ) Сначала скидочные предложения

    div(:class="$style.param")
      span Пересадки — {{ form.transfers }}
    vm-switch(
      :class="$style.paramContent"
      v-model="form.transfers"
    )
      vm-option(:value="1" init) 1
      vm-option(:value="2") 2
      vm-option(:value="3") 3
      vm-option(:value="4") 4 и более

  vm-button(
    :class="$style.submit"
    primary
    raised
    full-width
  ) Показать 316 предложений
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import OfferType from './offer-type.vue';

@Component({
  components: {
    OfferType
  }
})
export default class OfferFilter extends Vue {

  form = {
    offerType: 'airplane',
    transfers: 2
  }
}
</script>

<style lang="postcss" module>
@import '@design';

.root {

  :global(.vm-card__wrapper) {
    box: vertical top;
  }
}

.offerType {
  margin: 16px;
}

.filter {
  margin: 0 16px 0;
  display: flex;
  background: $primary;
  border-radius: 4px;
  padding: 16px 16px 24px 16px;
}

.filterPrice {
  flex-grow: 1;
  text-align: left;

  &:last-child {
    text-align: right;
  }

  p {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 500;
    color: #FFF;
    margin-bottom: 6px;
  }

  span {
    font-size: 18px;
    color: #fff;
    font-weight: 600;
  }
}

.filterDivider {
  width: 60px;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(255,255,255,0.4);
    position: absolute;
    top: 75%;
    transform: translateY(-50%);
    left: 0;
  }
}

.filterSlider {
  position: relative;
  margin-bottom: 32px;
}

.filterSliderButton {
  position: absolute;
  top: 0;
  width: 30px;
  height: 30px;
  background: #2F80ED;
  border: 10px solid #fff;
  border-radius: 100%;
  transform: translateY(-50%);
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);

  &:nth-child(1) {
    left: 25%;
  }

  &:nth-child(2) {
    left: 60%;
  }
}

.param {
  box: horizontal middle;
  border-style: solid;
  border-width: 1px 0 0;
  min-height: 56px;
  padding: 0 16px;

  &:last-child {
    border-width: 0 0 1px;
  }
}

.paramContent {
  padding: 0 16px 16px;
}

.submit {
  margin-top: 24px;
  height: 56px;
}
</style>

