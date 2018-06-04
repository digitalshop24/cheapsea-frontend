<template lang="pug">
vm-button(
  :class="$style.root"
  primary
  raised
)
  span(:class="$style.buy") Купить
  span(:class="$style.price") от {{ price | money }} ₽
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ButtonBuy extends Vue {

  @Prop([Number, String]) price: string | number;

}
</script>

<style lang="postcss" module>
@import '@design';

.root {
  display: flex;
  height: 48px;
  margin-top: 32px;
  padding: 0 24px;
  font-size: 16px;
  text-transform: none;

  :global(.vm-button__label) {
    justify-content: space-between;
    text-transform: normal;
  }
}

.buy {
  flex: 1 1 auto;
  text-align: left;
}

</style>
