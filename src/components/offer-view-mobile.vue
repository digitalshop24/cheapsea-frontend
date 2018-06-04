<template lang="pug">
.offer-view
    app-header.box-light(slot="header")
        vm-button(
            icon="arrow_back"
            @click="$emit('close')"
        )
        h1
            | {{ offer.origin | json('name') }}
            | -
            | {{ offer.destination | json('name') }}

    .offer-view__header
        p {{ offer.origin | json('name') }}
        p {{ offer.destination | json('name') }}

        .offer-view__header-directions
            SvgArrow

        .offer-card__body
            .offer-card__points
                .offer-card__point
                    p {{ offer.date_from | time }}
                    p {{ offer.origin | json('name') }}
                    p {{ offer.date_from | dateWeek }}
                .offer-card__point
                    p {{ offer.date_to | time }}
                    p {{ offer.destination | json('name') }}
                    p {{ offer.date_to | dateWeek }}

        vm-button.offer-view__buy(
            primary
            raised
            @click="buy"
        )
            span Купить
            span от {{ offer.price | money }} ₽

    .offer-view__tickets
        OfferTicket(title="Билет туда" :offer="offer")

    h1 Описание

    .offer-view__about
        p Очень боялась ехать одна в Кубу, понаслушалась всякого, поэтому тщательно выбирала отель.
        p Остановилась на Holiday потому что уже отдыхала в этой сети в Тайланде. Просто не хотела рисковать. За 11 дней я не пожалела о своём выборе ни разу! Прилагаю фотки

        .vm-row(data-align="center").pad
            img(src="/static/images/chips-description-image-01.jpg" alt="")

    h1 Входит в стоимость

    .offer-view__box
        p Бесплатный трансфер из аэропорта в отель и обратно
        p Услуги русскоговорящего гида в течение всего отдыха
        p Билеты на двоих в обе стороны

    h1 Не входит в стоимость

    .offer-view__box.is--excluded
        p Топливный сбор
        p Виза
        p Экскурсии

    .offer-view__tags
        .offer-view__tag море
        .offer-view__tag ксонлнцу
        .offer-view__tag лето
        .offer-view__tag отпуск

    .offer-view__meta
        h1 ID чипса
        p {{ offer.id }}
        h1 ID агента
        p null
        h1 Дата создания
        p {{ offer.created_at | dateWeek }}
        h1 Дата редактирования
        p {{ offer.updated_at | dateWeek }}
        h1 Начало дат полетов
        p null
        h1 Конец дат полетов
        p null
        h1 Начало действия акции
        p null
        h1 Конец действия акции
        p null

    .pad-h
        vm-button.offer-view__buy(
            primary
            raised
            @click="buy"
        )
            span Купить
            span от {{ offer.price | money }} ₽



    h1 Похожие предложения

    .pad-h
        OfferCard(:offer="offer")
        OfferCard(:offer="offer")

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SvgArrow from '@/assets/arrow.svg';
import OfferPath from './offer-path.vue';
import OfferTicket from './offer-ticket.vue';
import AppHeader from './app-header.vue';

@Component({
  name: 'offer-view',
  components: {
    SvgArrow,
    OfferPath,
    OfferTicket,
    AppHeader
  }
})
export default class OfferViewMobile extends Vue {

    @Prop()
    offer;

    buy() {
        console.log('buy')
    }

}
</script>

<style lang="postcss">

@import 'css/colors';

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
