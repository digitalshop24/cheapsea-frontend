<template lang="pug">

.app.box
    keep-alive(
        :include="['search-route']"
    )
        router-view

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
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
        'svg-logo': SvgLogo
    }
})
export default class App extends Vue {

    private logout(): void {
        console.log('logout');
    }

    onScroll(e) {
        const wrapper = e.target.scrollingElement;
        const scrollMax = wrapper.scrollHeight - wrapper.clientHeight;

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
</script>

<style lang="postcss">

@import 'css/vars.css';

.app {
    max-width: $md;
    margin: auto;
    min-height: 100%;
    box: vertical top;
    font-family: 'Montserrat', sans-serif;
    padding-top: $header-height;
    background: #FFF;
}

</style>
