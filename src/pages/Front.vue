<template lang="pug">
.front

    app-header.front-header
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
            .front-best__offer(
                v-for="i in [0,1,2,3,4,5]"
            )
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
import axios from "axios";
import RoutePage from "@/core/route";
import { Component } from "vue-property-decorator";
import Search from "./Search.vue";
import Logo from '@/assets/logo.svg';
import Offers from "@/core/offers";

@Component({
  name: "offers-page",
  components: {
    search: Search,
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

        &__menu {
            position: absolute;
            left: 0;
            top: 0;
        }

        &__logo {
            flex: 1 1 auto;
            text-align: center;

            svg {
                width: 124px;
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
        height: 64px;
        border-radius: 4px;
        box: horizontal middle space-between;
        padding: 16px 24px;
        font-size: 17px;
        line-height: 1;
        cursor: pointer;
        font-weight: 500;
        margin: 16px;
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
            margin: 8px;

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
        }
    }

    .app-header {
        color: $primary;
    }
}

</style>
