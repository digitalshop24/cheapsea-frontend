<template lang="pug">
div(:class="$style.root")
  .container(:class="$style.header")
    div(:class="$style.block")
      h1(:class="$style.ticketHeadTitle") Билет туда
      svg-fly-desktop(:class="$style.ticketHeadSvg")
      offer-points(:offer="offer")

    div(:class="$style.divider")

    div(:class="$style.block")
      h1(:class="$style.ticketHeadTitle") Билет обратно
      svg-fly-desktop(:class="$style.ticketHeadSvg")
      offer-points.pad(:offer="offer")

  div(:class="$style.body")
    .container(:class="$style.bodyContainer")
      div(:class="$style.block")
        offer-ticket(:offer="offer")
      div(:class="$style.divider")
      div(:class="$style.block")
        offer-ticket(:offer="offer")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SvgFlyDesktop from '@/assets/fly-desktop.svg';
import OfferPoints from '@/components/offer-points.vue';
import OfferTicket from '@/components/offer-ticket.vue';

@Component({
  components: {
    SvgFlyDesktop,
    OfferPoints,
    OfferTicket
  }
})
export default class OfferTicketsDesktop extends Vue {

  @Prop(Object) offer: any;
}
</script>

<style lang="postcss" module>
@import '@design';

.root {
  margin-top: 64px;
}

.header {
  box: horizontal;
  margin-bottom: 40px;
}

.body {
  background: $primary;
  padding: 40px 0;
}

.bodyContainer {
  box: horizontal;
}

.divider {
  width: 104px;
  flex: 0 0 auto;
}

.block {
  position: relative;
  flex: 1 1 50%;
}

.ticketHeadTitle {
  font-size: 18px;
  text-align: center;
  margin: 48px 0 32px;
}

.ticketHeadSvg {
  position: absolute;
  top: 0;
  width: 100%;
}

</style>
