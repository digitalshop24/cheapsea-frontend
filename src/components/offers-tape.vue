<template lang="pug">
.offers-tape
  .offers-tape__header
    slot(name="header")
  .offers-tape__list
    .offers-tape__block(
      v-for="offer in offers"
    )
      slot(name="block" :offer="offer")
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class OffersTape extends Vue {

  @Prop(Array) offers;

}
</script>

<style lang="postcss">
@import "vars";
@import "colors";

.offers-tape {

  &__header {
    box: horizontal left space-between;
    padding: 20px;
    margin: 0;

    h1 {
      font-size: 14px;
      line-height: 24px;
      font-weight: 600;
      margin: 0;
    }
  }

  &__list {
    width: 100%;
    overflow-y: auto;
    box: horizontal left;
    padding: 0 0 8px;
  }

  &__block {
    padding: 0 8px 8px;

    &:first-child {
      padding-left: 16px;
    }

    &:last-child {
      padding-right: 16px;
    }

    & > div {
      position: relative;
      border-radius: 4px;
      flex: 0 0 auto;
      overflow: hidden;
    }
  }
}
</style>
