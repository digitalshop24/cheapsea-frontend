<template lang="pug">
.app-header.bg-light
  .app-header__wrapper
    template(v-if="type === 'back'")
      vm-button(
        icon="arrow_back"
        @click="back"
      )
      h1 {{ title }}
      slot(name="right")

    template(v-else)
      slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component
export default class HeaderBack extends Vue {
  @State layout;

  @Prop(String) type: string;
  @Prop(String) title: string;
  @Prop(String) backRouteName: string;
  @Prop(Boolean) customEvent: boolean;


  back() {
    this.$emit('back');
  }
}
</script>

<style lang="postcss">

@import '@design';

.app-header {
    height: $header-height;
    min-width: 320px;
    font-size: 14px;
    position: fixed;
    top: 0;
	  left: 0;
    z-index: 100;
    width: 100%;
    margin: auto;
    color: $primary;
    padding: 0 10px;

    &__wrapper {
        box: horizontal middle;
        height: 100%;
        max-width: $max-content-width;
        margin: auto;
        position: relative;
    }

    h1 {
        font-size: 16px;
        font-weight: 500;
        flex-grow: 1;
    }
}

</style>
