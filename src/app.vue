<template lang="pug">

//- vm-layout(
//-   ref="layout"
//-   :asideFixed="false"
//-   :showHeader="showHeader"
//- )

vm-app.box(
  ref="layout"
  :class="{ 'on-top': scrollTop === 0 }"
)
  app-header(
    v-if="showHeader"
  )

  keep-alive(
    :include="[ 'search-route' ]"
  )
    router-view
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import { throttle } from '@/helpers/optimize';
import AppHeader from '@/components/app-header.vue';

import SvgMenu from './assets/menu.svg';
import SvgProfile from './assets/profile.svg';
import SvgPlus from './assets/plus.svg';

let scrollTimer: any = null;
const SCROLL_EMIT_HEIGHT = 240;
const SCROLL_EMIT_INTERVAL = 1000;

@Component({
  name: 'app',
  components: {
    SvgMenu,
    SvgPlus,
    SvgProfile,
    AppHeader
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

  @media (--md-view) {
    padding-top: $header-height-desktop;
  }

  &.is--scrolled {

  }
}

</style>


