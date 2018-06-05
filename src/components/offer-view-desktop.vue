<template lang="pug">
div(
  v-if="offer"
  :class="$style.root"
)
  div(
    :class="$style.headImage"
    :style="{ 'background-image': 'url(/static/images/front-head.jpg)' }"
  )
    button-buy(
      :class="$style.buy"
      :price="offer.price"
    )

  .container
    h1(:class="$style.headTitle") {{ offer.origin | json('name') }}
    div(:class="$style.headTitleDirections") Туда и обратно
    h1(:class="$style.headTitle") {{ offer.destination | json('name') }}

  offer-tickets-desktop(:offer="offer")

  .bg-light(:class="$style.message")
    .container(:class="$style.content")
      p Очень боялась ехать одна в Кубу, понаслушалась всякого, поэтому тчательно выбирала отель.
      p Остановилась на Holiday потому что уже отдыхала в этой сети в Тайланде. Просто не хотела рисковать. За 11 дней я не пожалела о своём выборе ни разу! Прилагаю фотки

  .container(:class="$style.slider")
    agile(
      :arrows="true"
      :dots="false"
    )
      .slide
        img(src="/static/images/front-head.jpg")
      .slide
        img(src="/static/images/front-head.jpg")

  .bg-light(:class="$style.message")
    .vm-row.container
      .xs-6(:class="$style.content")
        h2.text-success Входит в стоимость
        p Бесплатный трансфер из аэропорта в отель и обратно
        p Услуги русскоговорящего гида в течение всего отдыха
        p Билеты на двоих в обе стороны
      .xs-6(:class="$style.content")
        h2.text-accent Не входит в стоимость
        p Топливный сбор
        p Виза
        p Экскурсии
      vm-divider

    .vm-row.container
      .xs-6(:class="$style.content")
        h2 Для справки
        p Билет на автобус из аэропорта
        p Такси из аэропорта
        p Телефон посольства России
      .xs-6(:class="$style.content")
        h2
        p от $2
        p от $50
        p +7 898 41564 23
      vm-divider

    .vm-row(
      v-if="tags"
      data-align="center"
      :class="$style.content"
    )
      div(
        v-for="(tag, idx) in tags"
        :key="idx"
        :class="$style.tag"
      ) {{ tag }}

    .container
      .vm-row(:class="[$style.meta, $style.content]")
        .xs-3
          small ID чипса
          p {{ offer.id }}
        .xs-3
          small Дата создания
          p {{ offer.created_at | dateWeek }}
        .xs-3
          small Начало дат полетов
          p null
        .xs-3
          small Начало действия акции
          p null
        .xs-3
          small ID агента
          p null
        .xs-3
          small Дата редактирования
          p {{ offer.updated_at | dateWeek }}
        .xs-3
          small Конец дат полетов
          p null
        .xs-3
          small Конец действия акции
          p null
      vm-divider

    .vm-row(
      data-align="center"
      :class="$style.content"
    )
      button-buy(
        :class="$style.buy"
        :price="offer.price"
      )

    .container
      .vm-column(
        data-align="center"
        :class="[$style.content, $style.offers]"
      )
        h2 Похожие предложения

        offer-card(:offer="offer")
        offer-card(:offer="offer")

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SvgArrow from '@/assets/arrow.svg';
import OfferPath from '@/components/offer-path.vue';
import OfferCard from '@/components/offer-card.vue';
import OfferTicket from '@/components/offer-ticket.vue';
import OffersContainer from '@/core/offers';
import OfferTicketsDesktop from './offer-tickets-desktop.vue';

@Component({
  name: 'offer-view',
  components: {
    SvgArrow,
    OfferTicketsDesktop,
    OfferPath,
    OfferTicket,
    OfferCard
  }
})
export default class OfferView extends Vue {

  @Prop(Object) offer: any;
  @Prop(String) id: string;

  get tags(): any[] | null {
    const { offer } = this;

    return offer && offer.tags && offer.tags.data;
  }

  buy() {
    console.log('buy')
  }
}
</script>

<style lang="postcss" module>
@import '@design';

.root {

  img {
    width: 100%;
  }
}

.headImage {
  height: 570px;
  position: relative;
  background-size: cover;
  margin-bottom: 64px;

  .buy {
    position: absolute;
    bottom: -24px;
    margin: auto;
    left: 0;
    right: 0;
  }
}

.buy {
  width: 290px;
}

.headTitle {
  font-size: 64px;
  line-height: 80px;
  text-align: center;
}

.headTitleDirections {
  font-size: 14px;
  color: #999;
  font-weight: 500;
  text-align: center;
  margin: 32px 0;
}

.message {
  font-size: 16px;
  line-height: 26px;
}

.slider {
  padding: 88px 0 40px;
}

.subtitle {
  font-weight: 500;
  font-size: 14px;
}

.content {
  padding: 48px;

  h2 {
    font-size: 14px;
    margin: 0 0 32px;
    font-weight: 500;
    height: 26px;
  }

  p {
    line-height: 26px;
    margin-bottom: 24px;

    &:last-child {
      margin: 0;
    }
  }
}

.tag {
  font-size: 14px;
  background: #F7F4E9;
  border-radius: 4px;
  color: #565656;
  font-weight: 500;
  padding: 4px 10px;
  margin: 6px;
}

.meta {

  small {
    font-weight: 500;
    color: $default-text-light;
    display: block;
  }

  p {
    line-height: 26px;
    font-weight: 500;
  }

  > div {
    padding: 8px;
  }
}

.offers {
  padding: 0 0 240px;
  max-width: 640px;
  margin: auto;
}
</style>
