<template lang="pug">

vm-form.bg-light(
  size="1"
  :class="$style.root"
)
  .vm-column(:class="$style.left")
    .vm-row(:class="$style.row")
      select-city(
        label="Откуда"
        box
        size="1"
        :class="$style.field"
      )
      select-city(
        label="Куда"
        box
        :class="$style.field"
      )
    .vm-row(:class="[$style.dates, $style.row]")
      vm-date(
        label="Дата заезда"
        closeOnSelect
        box
        :class="$style.field"
      )
      vm-date(
        label="Дата отъезда"
        closeOnSelect
        box
        :class="$style.field"
      )

  .vm-column(:class="$style.right")

    offer-type(
      v-model="offerType"
      :class="$style.offerType"
    )

    router-link(to="search")
      vm-button(
        primary
        raised
        full-width
        :class="$style.searchButton"
      )
        span Поиск
        vm-icon search

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SelectCity from '@/components/select-city.vue';
import OfferType from '@/components/offer-type.vue';

@Component({
  components: {
    SelectCity,
    OfferType
  }
})
export default class HomeDesktopSearch extends Vue {
  offerType: string = 'airplane';
}
</script>

<style lang="postcss" module>
@import '@design';

.root {
  box: horizontal top space-between;
  background: #FFF;
  border-radius: 4px;
  box-shadow: $shadow-1;
  padding: 8px 16px 22px;

  :global(input) {
    font-weight: 500;
  }

  :global(.vm-input) {
    margin-bottom: 0;
  }

  :global(.offer-type) {
    height: 56px;
    margin-bottom: 14px;
  }
}

.row {
  flex-wrap: nowrap;
}

.left {
  flex: 1 1 65%;
  font-size: 16px;
}

.right {
  flex: 1 1 35%;
}

.field {
  flex: 1 1 50%;
  margin-right: 12px;
}

.dates {

  :global(.vm-input) {
    margin: 0;
  }
}

.offerType {
  flex: 1 1 auto;
  margin-top: 14px;
  height: 56px;

  svg {
    padding: 6px !important;
  }
}

.searchButton {
  height: 56px;
  box-shadow: none !important;
  border-radius: 4px;

  :global(.vm-button__label) {
    justify-content: space-between;
  }
}
</style>
