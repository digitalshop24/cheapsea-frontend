<template lang="pug">
div(:class="$style.root")
  div(:class="[$style.wrapper, vertical && $style.vertical]")
    svg-arrow(:class="$style.inverse")
    svg-arrow
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SvgArrow from '@/assets/arrow.svg';

@Component({
  components: {
    SvgArrow
  }
})
export default class ArrowDirections extends Vue {

  @Prop(Boolean) back: boolean;
  @Prop(Boolean) vertical: boolean;

}
</script>

<style lang="postcss" module>
@import '@design';

.root {


}

.wrapper {
  box: horizontal top;
  transform: rotate(90deg);

  svg {
    width: 18px;
  }
}

.vertical {
  transform: none;
}

.inverse {
  transform: rotate(180deg);
}

</style>
