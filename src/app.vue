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

.agile {
    position: relative;
    padding-bottom: 40px;

    &, * {
        &:focus,
        &:active {
            outline: none;
        }
    }

    &__list {
        display: block;
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: relative;
        width: 100%;
    }

    &__track {
        align-items: center;
        display: flex;
        justify-content: flex-start;

        .agile--disabled & {
            display: block;
            max-width: 100%;
        }
    }

    &__slide {
        display: block;

        .agile--fade & {
            opacity: 0;
            position: relative;
            z-index: 0;

            &--active {
                opacity: 1;
                z-index: 2;
            }

            &--expiring {
                opacity: 1;
                transition-duration: 0s;
                z-index: 1;
            }
        }
    }

    &__arrow {
        border: none;
        bottom: -11px;
        margin: 0;
        padding: 0;
        position: absolute;
        transition-duration: .3s;

        &[disabled] {
            cursor: default;
            opacity: .4;
        }

        &:hover {
            svg {
                fill: #333;
            }
        }

        &--prev {
            right: 56px;
        }

        &--next {
            right: 0;
        }

        svg {
            fill: #888;
            height: 24px;
            transition-duration: .3s;
        }
    }

    &__dots {
        align-items: center;
        display: flex;
        justify-content: center;
        list-style: none;
        margin: 20px 0;
        padding: 0;
        text-align: center;
        white-space: nowrap;
    }

    &__dot {
        margin: 0 10px;

        button {
            background-color: #eee;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: block;
            height: 10px;
            font-size: 0;
            line-height: 0;
            margin: 0;
            transition-duration: .3s;
            width: 10px;
        }

        &--current,
        &:hover {
            button {
                background-color: #888;
            }
        }
    }
}

</style>


