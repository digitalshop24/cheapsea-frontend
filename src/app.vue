<template lang="pug">

//- vm-layout(
//-   ref="layout"
//-   :asideFixed="false"
//-   :showHeader="showHeader"
//- )

vm-app.box(
  ref="layout"
  :class="{ 'is--scrolled': scrollTop > 0 }"
)
  app-header(
    v-if="showHeader"
  )
    vm-button(icon="menu" primary)

    router-link.app-logo(to="/")
      svg-logo

    .grow

    vm-button(icon="add" primary)
    vm-button(icon="person" primary)

  keep-alive(
    :include="[ 'search-route' ]"
  )
    router-view
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import { throttle } from '@/helpers/optimize';
import SvgLogo from './assets/logo.svg';
import SvgMenu from './assets/menu.svg';
import SvgProfile from './assets/profile.svg';
import SvgPlus from './assets/plus.svg';

let scrollTimer: any = null;
const SCROLL_EMIT_HEIGHT = 240;
const SCROLL_EMIT_INTERVAL = 1000;

@Component({
  name: 'app',
  components: {
    'svg-menu': SvgMenu,
    'svg-plus': SvgPlus,
    'svg-profile': SvgProfile,
    SvgLogo
  }
})
export default class App extends Vue {

  scrollTop: number = 0;


  private get showHeader() {
    const smallView = this.$store.state.layout.smallView;
    const mobileHead = this.$router.currentRoute.meta.mobileHead;

    return !(smallView && mobileHead);
  }

  private logout(): void {
    console.log('logout');
  }

  onScroll(e) {
      const wrapper = e.target.scrollingElement;
      const scrollMax = wrapper.scrollHeight - wrapper.clientHeight;

      this.scrollTop = wrapper.scrollTop;
      console.log('scroll')

      if (wrapper.scrollTop > scrollMax - SCROLL_EMIT_HEIGHT && scrollTimer === null) {
          this.$emit('scrollend');

          scrollTimer = setTimeout(() => {
              scrollTimer = null;
          }, SCROLL_EMIT_INTERVAL);
      }
  }

  mounted() {
      this.$store.state.layout = this.$refs.layout;
      window.addEventListener('scroll', throttle(this.onScroll));
  }

  beforeDestroy() {
      window.removeEventListener('scroll', throttle(this.onScroll));
  }
}


// #vm-app {
//     margin: auto;
//     min-height: 100%;
//     box: vertical top;
//

//     .app-logo {
//         height: 14px;
//         color: #FFF;
//     }

//     .vm-layout__title {
//         line-height: 1;
//         font-size: 12px;
//         padding-left: 8px;
//     }
// }

</script>

<style lang="postcss">

@import 'css/vars.css';

#vm-app {
  padding-top: $header-height;

  &.is--scrolled {

    .app-header {
      box-shadow: $shadow-2;
    }
  }

  .app-logo {
    margin-left: 16px;
    font-size: 12px;
    line-height: 1;

    svg {
      height: 14px;
    }
  }
}

</style>


