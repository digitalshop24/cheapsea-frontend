<template lang="pug">

.front
  head-mobile(v-if="layout.smallView")
  head-desktop(v-else)

  offers-tape.front-best__offers(
    :offers="[1,2,3,4,5,6,7,8,9]"
  )
    template(slot="header")
      vm-icon star
      h1 Лучшие предложения недели
    .front-best__offer(
      slot="block"
      slot-scope="{ offer }"
    )
      h1 Комсомольск-на-Амуре
      small 16 часов. Без пересадок. Из Москвы
      p от 6500 ₽

  vm-divider

  vm-tabs.front-tabs(align="center")
    vm-tab(label="Турция")
    vm-tab(label="Индия")
    vm-tab(label="Ю.Америка")
    vm-tab(label="Китай")
    vm-tab(label="Япония")

  offers(:offers="offers")

</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import RoutePage from "@/core/route";
import { State } from 'vuex-class';
import Offers from "@/core/offers";
import HeadDesktop from '@/components/front-head-desktop.vue';
import HeadMobile from '@/components/mobile/front-header.vue';
import OffersTape from '@/components/offers-tape.vue';


@Component({
    name: "home",
    components: {
        HeadDesktop,
        HeadMobile,
        OffersTape
    }
})
export default class FrontRoute extends RoutePage {
    offers: Offers = new Offers();
    selectedOffer: any = null;

    @State layout;

    filters: object = {
        offer_type: "airplane"
    };

    created() {
        this.offers = new Offers(this.filters);
    }
}
</script>

<style lang="postcss">
@import 'colors';
@import 'vars';

.front-tabs {
  background: $default-bg-dark;

  .vm-tab {
    padding: 0 32px;

    &__label {
      text-transform: none;
      font-weight: 500;
    }
  }
}

.front-best__offers {
  margin-bottom: 24px;

  @media (--md-view) {

    .offers-tape__header {
      justify-content: center;
    }
  }

  i {
    color: $orange-600;
    margin-right: 16px;
  }
}

.front {
  width: 100%;

    &-header {

        &__menu {
            position: absolute !important;
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
                margin: 0;
            }
        }

        &__offers {
            // width: 100%;
            // overflow-y: auto;
            // box: horizontal left;
            // padding: 8px;
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
            background: url(https://placeimg.com/320/200/nature) center;
            z-index: 5;
            overflow: hidden;
            box-shadow: $shadow-1;

            &:after {
                content: '';
                background: rgba(0,0,0,.54);
                z-index: -1;
                size: 100%;
                top: 0;
                left: 0;
                position: absolute;
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
