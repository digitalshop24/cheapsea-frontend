<template lang="pug">
offer-view-mobile(
  v-if="layout.smallView"
  :offer="offer"
)
offer-view-desktop(
  v-else
  :offer="offer"
)
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import RoutePage from '@/core/route';
import OffersContainer from '@/core/offers';
import OfferViewDesktop from '@/components/offer-view-desktop.vue';
import OfferViewMobile from '@/components/offer-view-mobile.vue';

@Component({
  components: {
    OfferViewDesktop,
    OfferViewMobile
  }
})
export default class OfferView extends RoutePage {

  // @Prop(Object) offer: any;
  @Prop(String) id: string;

  @State layout;


  offers: any  = null;

  get offer() {
    return this.offers && this.offers.data && this.offers.data[0];
  }

  buy() {
    console.log('buy')

  }

  created() {

    this.offers = new OffersContainer();

    this.offers.get();

    console.log(this.$route.params);
  }
}
</script>

<style lang="postcss" module>
@import '@design';

.headImage {
  height: 570px;
  position: relative;
  background-size: cover;
  margin-bottom: 64px;
}

.headBuyButton {
  position: absolute;
  bottom: -24px;
  width: 290px;
  margin: auto;
  left: 0;
  right: 0;
}

.offer-view {

    &__header {
        height: 356px;
        background: #000;
        position: relative;
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
        padding: 16px;
        padding-top: 32px;
        color: #FFF;
        z-index: 1;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: url(/static/images/more_big.jpg) no-repeat center;
            opacity: .72;
            z-index: -1;
        }

        & > p {
            padding-left: 56px;
            font-size: 18px;
        }

        &-directions {
            position: absolute;
            left: 28px;
            top: 42px;

            svg {
                width: 18px;
            }
        }

        .offer-card {

            &__body {
                margin-top: 32px;
                padding: 0;

                p {
                    color: #FFF !important;
                }
            }

            &__point {
                font-size: 18px;

                p:first-child {
                    font-size: 22px;
                    margin-bottom: 12px;
                }

                p:nth-child(2) {
                    font-size: 14px;
                }

                p:last-child {
                    opacity: .8;
                }
            }


        }
    }

    &__buy.vm-button {
        width: 100%;
        height: 60px;
        margin-top: 32px;
        padding: 0 24px;
        display: flex;
        font-size: 16px;
        text-transform: none;

        &__label {
            justify-content: space-between;
            text-transform: normal;
        }

        span:first-child {
            flex: 1 1 auto;
            text-align: left;
        }
    }

    &__tickets {
        margin-top: -24px;
        margin-bottom: 24px;
        padding: 0 8px;
    }

    &__about {
        padding: 0 16px;

        p {
            font-size: 13px;
            margin-bottom: 8px;
            line-height: 20px;
        }

        img {
            border-radius: 2px;
        }
    }

    &__box {
        margin: 0 16px;
        border-width: 2px;
        border-style: solid;
        border-color: #B0DCA5 !important;
        padding: 8px;
        border-radius: 4px;

        &.is--excluded {
            border-color: #F27C7C;
        }

        p {
           padding: 8px;
           font-size: 13px;
           line-height: 20px;
        }
    }

    &__tags {
        box: horizontal center wrap;
        margin: 24px 0;
        padding: 16px;
        border-width: 1px 0;
        border-style: solid;
    }

    &__tag {
        font-size: 12px;
        background: #F7F4E9;
        border-radius: 4px;
        color: #565656;
        font-weight: 500;
        padding: 4px 8px;
        margin: 6px;
    }

    &__meta {
        text-align: center;

        h1 {
            font-size: 11px;
            font-weight: 500;
            color: $default-text-light;
            display: block;
        }

        p {
            font-size: 14px;
            line-height: 26px;
            font-weight: 500;
        }

        p + h1 {
            margin-top: 12px;
        }
    }

    .app-modal__content {

        & > h1 {
            text-align: center;
            line-height: 32px;
            font-size: 16px;
            margin: 0;
            font-weight: 500;
            padding: 16px 24px;
        }
    }

    .app-header {
        color: $primary;
    }
}

</style>
