<template lang="pug">
.app-header.bg-light
  .container
    vm-button(icon="menu" primary)
    router-link.app-header__logo(to="/")
      svg-logo
    .grow
    .app-header__actions
      vm-button(icon="add" primary)
      vm-button(icon="person" primary)
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SvgLogo from '@/assets/logo.svg';

@Component({
  components: {
    SvgLogo
  }
})
export default class AppHeader extends Vue {
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
  box-shadow: $shadow-1;

  &__logo {
    margin-left: 24px;
    font-size: 12px;
    line-height: 1;
    padding: 16px 0;

    svg {
      height: 14px;
    }
  }

  &__actions {

    @media (--md-view) {

      .vm-button {
        margin-left: 8px;
      }
    }
  }


  @media (--md-view) {
    height: $header-height-desktop;
  }

  .container {
    box: horizontal middle;
    height: 100%;
  }

  h1 {
    font-size: 16px;
    font-weight: 500;
    flex-grow: 1;
  }
}

</style>
