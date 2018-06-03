<template lang="pug">
.md-header__tab
  .md-header__tab-left
    .md-header__tab-title {{ title }}
    .md-header__tab-price
      vm-button(
        primary
        raised
        @click="$emit('click')"
      ) {{ count }} предложений от {{ price }} ₽

  .md-header__tab-right
    .md-header__tab-description {{ description }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class FrontHeadTab extends Vue {

  @Prop(String) count: string;
  @Prop(String) title: string;
  @Prop(String) price: string;
  @Prop(String) description: string;
}
</script>

<style lang="postcss">
@import "@design";

.md-header__tab {
  height: 320px;
  padding: 24px 32px 64px;
  box: horizontal;

  &-left {
    flex: 0 0 560px;
    box: vertical middle;
  }

  &-right {
    box: horizontal middle;
    flex: 1 1 auto;
  }

  &-title {
    font-size: 48px;
    line-height: 42px;
    max-width: 640px;
    font-weight: 500;
    margin: 0 0 56px;
    text-shadow: 0px 1px 1px $default-text-light;
    color: #FFF;
  }

  &-description {
    background: rgba(255,255,255,.56);
    padding: 32px;
    border-radius: 4px;
    line-height: 20px;
    box-shadow: $shadow-1;
    width: 100%;
  }

  &-price {

    .vm-button {
      height: 48px;
    }
  }
}

</style>
