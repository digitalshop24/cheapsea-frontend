<template lang="pug">
.offer-card
  router-link.offer-card__header.box-primary(
    :to="{ name: 'offer', params: { offer: offer, id: offer.id } }"
  )
    p {{ offer.origin | json('name') }}
    p {{ offer.destination | json('name') }}
    .offer-card__header-directions
      svg-arrow

  .offer-card__body
    .offer-card__points
      .offer-card__point
        h1 {{ offer.date_from | time }}
        p {{ offer.origin | json('name') }}
        p {{ offer.date_from | dateWeek }}
      .offer-card__point
        h1 {{ offer.date_to | time }}
        p {{ offer.destination | json('name') }}
        p {{ offer.date_to | dateWeek }}

    offer-path(:offer="offer")

  .offer-card__footer
    .offer-card__footer-icons
      i.material-icons flight
      i.material-icons local_mall
      i.material-icons local_dining
    vm-button(
      primary
      raised
      @click="select"
    ) от {{ offer.price | money }} ₽
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SvgArrow from '@/assets/arrow.svg';
import OfferPath from './offer-path.vue';
import acc from 'accounting';

@Component({
  name: 'offer-card',
  components: {
    'svg-arrow': SvgArrow,
    OfferPath
  }
})
export default class OfferCard extends Vue {

    @Prop()
    offer;

    select() {
        this.$emit('select', this.offer);
    }
}
</script>

<style lang="postcss">
.offer-card {
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 16px;
  box-shadow: $shadow-2;

    &:last-child {
        margin-bottom: 0;
    }

    &__header {
        position: relative;
        font-size: 18px;
        display: block;
        line-height: 28px;
        padding: 16px;
        padding-left: 56px;
        height: 88px;
        color: #FFF;
        background: url(/static/images/more.jpg) no-repeat;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        cursor: pointer;
        font-weight: 700;

        &-directions {
            position: absolute;
            left: 16px;
            height: 56px;
            top: 28px;

            svg {
                width: 12px;
            }
        }

        p {
            font-weight: 700;
        }
    }

    &__points {
        box: horizontal space-between;
        margin-bottom: 16px;
    }



    &__body, &__footer {
        padding: 12px;
    }

    &__point {

        line-height: 22px;
        font-weight: 500;

        &:last-child {
            text-align: right;
        }

        h1, p {
            @apply --text-nowrap;
        }

        h1 {
            font-size: 18px;
            margin-bottom: 4px;
        }

        p {
            font-size: 12px;
            line-height: 18px;

            &:last-child {
                color: $grey-600;
            }
        }
    }

    &__footer {
        box: horizontal middle space-between;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        i {
            color: $grey-600;
            font-size: 20px;
            margin-right: 8px;
        }
    }

    .vm-button {
        box-shadow: none;
    }
}
</style>
