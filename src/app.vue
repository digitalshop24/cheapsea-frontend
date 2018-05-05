<template lang="pug">
.app
    header.app-header(:class="{ 'is--fixed': isFixedHeader }")
        .app-header__content
            router-link(to="/")
                svg-menu.app-header__button.app-header__menu
                svg-logo.app-header__logo
            .grow
            svg-plus.app-header__button
            svg-profile.app-header__button

    .route-page
        router-view

    //- footer
    //-     .container
    //-         .footer-button
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { throttle } from '@/helpers/optimize';
import SvgLogo from './assets/logo.svg';
import SvgMenu from './assets/menu.svg';
import SvgProfile from './assets/profile.svg';
import SvgPlus from './assets/plus.svg';

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

    isFixedHeader: boolean = false;

    @State menu;
    @State title;
    @State subtitle;

    private logout(): void {
        console.log('logout');
    }

    onScroll(e) {
        this.isFixedHeader = !!e.target.scrollingElement.scrollTop;
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

$main-color: #888;





.sidebar {
    min-height: 100%;
    box: vertical;

    &-content {
        box: vertical;
        overflow: auto;
        flex-grow: 1;
    }

    &-header {
        box: vertical center middle;
        cursor: pointer;
        padding: 0 !important;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        text-align: center;
        flex-shrink: 0;
        @apply --text-large-2;
    }

    &-nav {
        margin: 8px 0;
        flex-shrink: 0;
    }
}

</style>
