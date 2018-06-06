<template lang="pug">
vm-button(
  :class="[$style.root, large && $style.large]"
  :noshadow="noshadow"
  primary
  raised
)
  span(
    v-if="label"
    :class="$style.buy"
  ) {{ label }}
  span(:class="$style.price") от ₽ {{ price | money }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ButtonBuy extends Vue {

  @Prop([Number, String]) price: string | number;
  @Prop(Boolean) large: boolean;
  @Prop(String) label: string;
  @Prop(Boolean) noshadow: boolean;

}
</script>

<style lang="postcss" module>
@import '@design';

.root {
  display: flex;
  padding: 0 24px;
  text-transform: none;

  :global(.vm-button__label) {
    justify-content: space-between;
    text-transform: normal;
  }
}

.large {
  font-size: 16px;
  height: 48px;
}

.buy {
  flex: 1 1 auto;
  text-align: left;
}

</style>
