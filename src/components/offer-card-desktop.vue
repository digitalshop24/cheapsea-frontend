<template lang="pug">
div(:class="$style.root")
  div(:class="$style.header")
    router-link(
      :class="$style.headerLink"
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
    button-buy(
      :price="offer.price"
    )

  .pad
    div(:class="$style.pointsHead")
      small Туда 21 час в пути. 2 пересадки
      div.text-light
        vm-icon flight
        vm-icon local_mall
        vm-icon local_dining
    offer-points(:offer="offer")
      offer-path(:offer="offer")

  div(:class="$style.divider")

  .pad
    div(:class="$style.pointsHead")
      small Обратно 1 день 16 часов в пути. 1 пересадка
      div.text-light
        vm-icon flight
        vm-icon local_mall
        vm-icon local_dining
    offer-points(:offer="offer")
      offer-path(:offer="offer")

  div(:class="$style.footer")

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
  background-size: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;

  small {
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
  }
}

.headerLink {
  box: vertical top;
}

.headerTitle {
  box: horizontal middle;
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  padding: 0;
  margin-bottom: 16px;

  .arrows {
    margin: 0 16px;
  }
}

.footer {
  box: horizontal middle space-between;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
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

.divider {
  border-width: 0 0 1px;
  border-style: dashed;
}

.pointsHead {
  box: horizontal middle space-between;
  margin-bottom: 8px;

  i {
    color: $grey-600;
    font-size: 20px;
    margin-left: 8px;
  }
}

</style>
