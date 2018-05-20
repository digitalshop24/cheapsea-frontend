<template lang="pug">
.front

    Header.front-header
        vm-button.front-header__menu(
            icon="menu"
        )
        .front-header__logo
            Logo
        
        .front-header__actions
            vm-button(icon="add")
            vm-button(icon="person")

    router-link.front-search.box-primary(
        to="/search"
        @click="$router.push"
    )
        | Поиск предложений
        vm-icon search


    .front-best
        .front-best__title
            vm-icon grade
            h1 Лучшие предложения недели

        .front-best__offers
            .pad-h(
                v-for="i in [0,1,2,3,4,5]"
            )
                .front-best__offer
                    h1 Комсомольск-на-Амуре
                    small 16 часов. Без пересадок. Из Москвы
                    p от 6500 ₽

    .main-list
        .main-list-tabs
            .main-list-tabs-unit Турция
            .main-list-tabs-unit.active Индия
            .main-list-tabs-unit Ю. Америка
            .main-list-tabs-next
            
    offers(:offers="offers")

    footer.footer
        .container
            .footer-button
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import RoutePage from "@/core/route";
import Offers from "@/core/offers";
import Logo from '@/assets/logo.svg';

@Component({
    name: "offers-page",
    components: {
        Logo
    }
})
export default class FrontRoute extends RoutePage {
    offers: Offers = new Offers();
    selectedOffer: any = null;

    filters: object = {
        offer_type: "airplane"
    };
    
    created() {
        this.offers = new Offers(this.filters);
    }
}
</script>

<style lang="postcss">
@import 'css/colors';

.front {

    &-header {
        background: #FFF;

        &__menu {
            position: absolute;
            left: 0;
            top: 0;
        }

        &__logo {
            flex: 1 1 auto;
            text-align: center;
            height: 14px;

            svg {
                height: 100%;
            }
        }

        &__actions {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;

            @media (--xs-view) {
                display: none;
            }
        }
    }

    &-search {
        height: 56px;
        border-radius: 4px;
        box: horizontal middle space-between;
        padding: 12px 24px;
        font-size: 17px;
        line-height: 1;
        cursor: pointer;
        font-weight: 500;
        margin: 16px;
        box-shadow: $shadow-1;
        color: #FFF !important;
    }

    &-best {

        &__title {
            box: horizontal left middle;
            padding: 16px;
            padding: 8px 16px;
            margin: 0;
            color: $warning;

            h1 {
                font-size: 14px;
                line-height: 24px;
                padding-left: 8px;
                margin: 0;
            }
        }
       
        &__offers {
            width: 100%;
            overflow-y: auto;
            box: horizontal left;
            padding: 8px;
        }

        &__offer {
            border-radius: 4px;
            width: 256px;
            background: rgba(0,0,0,.8);
            height: 124px;
            color: #FFF;
            padding: 16px;
            position: relative;
            flex: 0 0 auto;
            background: url(/static/images/front-demo.jpg) center;
            z-index: 5;
            overflow: hidden;

            &:after {
                content: '';
                background: rgba(0,0,0,.54);
                z-index: -1;
                size: 100%;
                top: 0;
                left: 0;
                position: absolute;
            }

            &:last-child {
                margin-right: 8px;
            }

            h1 {
                font-size: 16px;
                margin: 0 0 6px;
            }

            h2 {
                font-size: 12px;
            }

            p {
                font-weight: 500;
                font-size: 16px;
                position: absolute;
                bottom: 16px;
                left: 16px;
                margin: 0;
            }

            small {
                font-weight: 500;
            }
        }
    }

    & > .app-header {
        color: $primary;
    }
}

.main-list-tabs {
    background-color: #fff;
    position: relative;
    border-top:1px solid #e6e6e6;
    border-bottom:1px solid #e6e6e6;
    display: flex;
    line-height: 31px;
    padding:0 22px;
    font-size: 10px;
    
    &-unit {
        font-weight: 500;
        text-align: center;
        width:calc(100%/3);
        position: relative;
        transition: $transition .3s;
        &.active{
            color:#000;
            &:before{
                content:"";
                position: absolute;
                bottom:-1px;
                left:0;
                height:1px;
                width:100%;
                background-color: #2F80ED;
            }
        }
    }
}

</style>
