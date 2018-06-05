<template lang="pug">
div(:class="$style.root")
  router-link.box-primary(
    :class="$style.header"
    :to="{ name: 'offer', params: { offer: offer, id: offer.id } }"
  )
    small {{ offer.name }}
    div(:class="$style.headerTitle")
      div {{ offer.origin | json('name') }}
      arrow-directions(
        :class="[$style.arrows, layout.smallView && $style.arrowsVertical]"
        :vertical="layout.smallView"
        :back="true"
      )
      div {{ offer.destination | json('name') }}

  .pad
    offer-points.mar-b(:offer="offer")
    offer-path(:offer="offer")

  .pad(:class="$style.footer")
    div
      vm-icon flight
      vm-icon local_mall
      vm-icon local_dining
    button-buy(
      :price="offer.price"
      :noshadow="true"
      @click="select"
    )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ArrowDirections from '@/components/controls/arrow-dirs.vue';
import OfferPath from './offer-path.vue';
import OfferPoints from './offer-points.vue';

@Component({
  components: {
    OfferPath,
    OfferPoints,
    ArrowDirections
  }
})
export default class OfferCard extends Vue {

  @State layout;
  @Prop() offer;

  select() {
    this.$emit('select', this.offer);
  }
}
</script>

<style lang="postcss" module>

.root {
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 16px;
  box-shadow: $shadow-2;

  &:last-child {
    margin-bottom: 0;
  }
}

.header {
  position: relative;
  display: block;
  padding: 16px;
  color: #FFF;
  background: url(/static/images/more.jpg) no-repeat;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;

  small {
    font-weight: 500;
  }
}

.headerTitle {
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  padding-left: 40px;
  box: vertical;
  margin-top: 4px;

  @media (--md-view) {
    padding: 0;
    box: horizontal middle;

    .arrows {
      margin: 0 16px;
    }
  }
}

.footer {
  box: horizontal middle space-between;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  i {
    color: $grey-600;
    font-size: 20px;
    margin-right: 8px;
  }
}

.arrows {
  width: 18px;
}

.arrowsVertical {
  width: 24px;
  position: absolute;
  left: 18px;
  top: 48px;
}

</style>
