<template lang="pug">
div(:class="$style.root")
  div(:class="$style.point")
    p(:class="$style.time") {{ offer.date_from | time }}
    p {{ offer.origin | json('name') }}
    p {{ offer.date_from | dateWeek }}
  div(:class="[$style.point, $style.right]")
    p(:class="$style.time") {{ offer.date_to | time }}
    p {{ offer.destination | json('name') }}
    p {{ offer.date_to | dateWeek }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class OfferPoints extends Vue {

  @Prop(Object) offer: any;

}
</script>

<style lang="postcss" module>
@import '@design';

.root {
  box: horizontal space-between;
  line-height: 18px;
}

.point {
  font-size: 14px;
  font-weight: 500;
}

.time {
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
}

.right {
  text-align: right;
}
</style>
