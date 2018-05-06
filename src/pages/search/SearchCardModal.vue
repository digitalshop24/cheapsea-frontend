<template lang="pug">
.card-modal
    .card-modal__header
        p {{ offer.origin && offer.origin.name }}
        p {{ offer.destination && offer.destination.name }}
        
        .card-modal__header-directions
            svg-arrow

        .card-body
            .card-body__points
                .card-body__point 
                    p {{ offer.date_from | time }}
                    p {{ offer.origin.name }}
                    p {{ offer.date_from | dateWeek }}
                .card-body__point 
                    p {{ offer.date_to | time }}
                    p {{ offer.destination.name }}
                    p {{ offer.date_to | dateWeek }}

        cs-button
            span Купить
            span от {{ offer.price | money }} ₽

    .card-modal__tickets
        .card-modal__ticket
            .card-modal__ticket-header
                h1 Билет туда
                .card-body__path
                    .card-body__path-item {{ String(offer.from_airport) }}
                    .card-body__path-item {{ String(offer.to_airport) }}
                .card-modal__ticket-unit
                    h1 
                        | {{ offer.origin && offer.origin.name }}, 
                        | {{ String(offer.from_airport) }}
                    p 
                        | {{ offer.date_from | time }}, 
                        | {{ offer.date_from | dateWeek }}
                .card-modal__ticket-unit
                    h1 
                        | {{ offer.destination && offer.destination.name }},
                        | {{ String(offer.to_airport) }}
                    p 
                        | {{ offer.date_to | time }}, 
                        | {{ offer.date_to | dateWeek }}

            .card-modal__ticket-body

    .chips-description
        .container
            .chips-description-title Описание
            p Очень боялась ехать одна в Кубу, понаслушалась всякого, поэтому тчательно выбирала отель.
            p Остановилась на Holiday потому что уже отдыхала в этой сети в Тайланде. Просто не хотела рисковать. За 11 дней я не пожалела о своём выборе ни разу! Прилагаю фотки
            img(src="/static/images/chips-description-image-01.jpg" alt="")
            .chips-description-list.included
                .chips-description-list-title Входит в стоимость
                .chips-description-list-body
                    .chips-description-list-unit Бесплатный трансфер из аэропорта в отель и обратно
                    .chips-description-list-unit Услуги русскоговорящего гида в течение всего отдыха
                    .chips-description-list-unit Билеты на двоих в обе стороны
            .chips-description-list.excluded
                .chips-description-list-title Не входит в стоимость
                .chips-description-list-body
                    .chips-description-list-unit Топливный сбор
                    .chips-description-list-unit Виза
                    .chips-description-list-unit Экскурсии
    .chips-tags
        .container
            .chips-tags-unit море
            .chips-tags-unit ксонлнцу
            .chips-tags-unit безвизы
            .chips-tags-unit лето
            .chips-tags-unit отпуск
    .chips-info
        .container
            .chips-info-unit
                .chips-info-unit-title ID чипса
                .chips-info-unit-text {{ offer.id }}
            .chips-info-unit
                .chips-info-unit-title ID агента
                .chips-info-unit-text null
            .chips-info-unit
                .chips-info-unit-title Дата создания
                .chips-info-unit-text {{ offer.created_at | dateWeek }}
            .chips-info-unit
                .chips-info-unit-title Дата редактирования
                .chips-info-unit-text {{ offer.updated_at | dateWeek }}
            .chips-info-unit 
                .chips-info-unit-title Начало дат полетов
                .chips-info-unit-text null
            .chips-info-unit
                .chips-info-unit-title Конец дат полетов
                .chips-info-unit-text null
            .chips-info-unit
                .chips-info-unit-title Начало действия акции
                .chips-info-unit-text null
            .chips-info-unit
                .chips-info-unit-title Конец действия акции
                .chips-info-unit-text null
            a(href="#/").chips-main-button.chips-info-button
                    .chips-main-button-title Купить
                    .chips-main-button-price от ₽ 926 700
    .similar
        .container
            .similar-title Похожие предложения

            search-card(:offer="offer")
            search-card(:offer="offer")



    //- <div class="chips-tickets-unit-header">
    //-           <div class="chips-tickets-unit-title">Билет туда</div>
    //-           <div class="chips-tickets-unit-path">
    //-             <div class="chips-tickets-unit-path-unit">kms</div>
    //-             <div class="chips-tickets-unit-path-unit">fra</div>
    //-             <div class="chips-tickets-unit-path-unit">txl </div>
    //-             <div class="chips-tickets-unit-path-unit">xxx</div>
    //-           </div>
    //-         </div>

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SvgArrow from '@/assets/arrow.svg';
import Card from './SearchCard.vue';
import acc from 'accounting';

@Component({
    name: 'card-modal',
    components: {
        'svg-arrow': SvgArrow,
        'search-card': Card
    }
})
export default class SearchCardModal extends Vue {

    @Prop() 
    offer;

}
</script>

<style lang="postcss">

.card-modal {
    width: 800px;
    overflow: hidden;
    border-radius: 2px;

    &__header {
        height: 400px;
        background: #000;
        position: relative;
        font-size: 32px;
        line-height: 48px;
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
        }
        
        &-directions {
            position: absolute;
            left: 28px;
            top: 60px;

            svg {
                width: 18px;
            }
        }

        .card-body {
            margin-top: 24px;

            &__point {
                font-size: 18px;

                p:first-child {
                    font-size: 24px;
                    margin-bottom: 12px;
                }
            }

            p { 
                color: #FFF;
            }
        }

        button {
            float: right;
            height: 60px;
            margin-right: 16px;
            margin-top: 24px;
            width: 240px;
            padding: 0 24px;

            span:first-child {
                flex: 1 1 auto;
                text-align: left;
            }
        }
    }

    &__tickets {
        margin-top: -24px;
    }

    &__ticket {
        position: relative;			
        width:calc(100% - 30px);
        margin:0 auto;
        margin-bottom: 24px;
        background: #FFFFFF;
        box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.15);
        z-index: 4;

        &:before {
            z-index: 1;
            position: absolute;
            top: -5px;
            left:50%;
            transform:translateX(-50%);
            display: block;
            content: "";
            background: radial-gradient(circle, transparent 0px,transparent 1px,transparent 2px,transparent 3px,transparent 4px,#fff 5px,#fff 6px,#fff 14px);
            background-size: 23px 10px;
            background-position: 18px -5px;
            width: 224px;
            height: 5px;
		}

        &:after {
            content: '';
            z-index: 1;
            position: absolute;
            bottom: -5px;
            left:50%;
            transform:translateX(-50%);
            display: block;
            background: radial-gradient(circle, transparent 0px,transparent 3px,transparent 4px,#fff 6px,#fff 14px);
            background-size: 23px 10px;
            background-position: 18px 0px;
            width: 224px;
            height: 5px;
        }

        &-header {
            padding: 16px 24px;
            position: relative;

            &:before{
                position: absolute;
                content:"";
                bottom:100%;
                left:0;
                width:calc((100% - 224px)/2);
                height:5px;
                background-color: #fff;
                border-top-left-radius: 4px;
                z-index: 4;
            }

            &:after{
                position: absolute;
                content:"";
                bottom:100%;
                right:0;
                width:calc((100% - 224px)/2);
                height:5px;
                background-color: #fff;
                border-top-right-radius: 4px;
                z-index: 4;
            }

            & > h1 {
                text-align: center;
                margin-top: 12px;
                margin-bottom: 32px;
            }
        }

        &-body {
            padding: 0 11px;
            padding-top:13px;
            position: relative;
            
            &:before{
                position: absolute;
                content:"";
                top:100%;
                left:0;
                width:calc((100% - 224px)/2);
                height:5px;
                background-color: #fff;
                border-bottom-left-radius: 4px;
            }

            &:after{
                position: absolute;
                content:"";
                top:100%;
                right:0;
                width:calc((100% - 224px)/2);
                height:5px;
                background-color: #fff;
                border-bottom-right-radius: 4px;
            }
        }

        &-unit {
            margin-top: 24px;
            line-height: 24px;

            h1 {
                font-weight: 500;
            }
        }
    }
}

</style>
