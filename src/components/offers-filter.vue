<template lang="pug">

.filter-body

  vm-card
    form.filter

        .filter-top

            //- h1 Тип предложения
            offer-type(
                v-model="activeUnit"
            )

            .filter-price
                .filter-price__block
                    p от
                    span ₽ 25 000
                .filter-price__divider
                .filter-price__block
                    p до
                    span ₽ 35 000

            .filter-slider
                .filter-slider__button(style="left:20%")
                .filter-slider__button(style="left:50%")

            .filter-loc
                .filter-loc__title
                    | Вы находитесь:
                    router-link(to="/location") Москва

        .filter-list

            .filter-list__item
                .filter-list__title
                  vm-toggle Виза не нужна
                .filter-list__content


            .filter-list__item
                .filter-list__title Куда: Вся Исландия — 145
                .filter-list__content
                    .location-slider
                        .location-slider-wrap-outer
                            .location-slider-wrap(style="min-width:990px")
                                a(href="#/").location-slider-unit Все
                                a(href="#/").location-slider-unit.active А
                                a(href="#/").location-slider-unit Б
                                a(href="#/").location-slider-unit В
                                a(href="#/").location-slider-unit Г
                                a(href="#/").location-slider-unit Д
                                a(href="#/").location-slider-unit Е
                                a(href="#/").location-slider-unit Ё
                                a(href="#/").location-slider-unit Ж
                        .location-list
                                .location-list-unit
                                    .location-list-unit-title
                                        |А
                                        .location-list-unit-title-total 5 предложений
                                    .location-list-unit-body
                                        a(href="#/").location-list-unit-body-item
                                            | Арзамас
                                            .location-list-unit-body-item-total 1
                                        a(href="#/").location-list-unit-body-item
                                            | Акюрейри
                                            .location-list-unit-body-item-total 4
                                .location-list-unit
                                    .location-list-unit-title
                                        |Б
                                        .location-list-unit-title-total 31 предложение
                                    .location-list-unit-body
                                        a(href="#/").location-list-unit-body-item
                                            | Борганрес
                                            .location-list-unit-body-item-total 3
                                        a(href="#/").location-list-unit-body-item
                                            | Боргарфьордур
                                            .location-list-unit-body-item-total 4
                                        a(href="#/").location-list-unit-body-item.active
                                            | Бэйстри
                                            .location-list-unit-body-item-total 21
                                        a(href="#/").location-list-unit-body-item
                                            | Бреиддэлсвик
                                            .location-list-unit-body-item-total 2
                                        a(href="#/").location-list-unit-body-item
                                            | Будардалур
                                            .location-list-unit-body-item-total 1
                                .location-list-unit
                                    .location-list-unit-title
                                        |Г
                                        .location-list-unit-title-total 1 предложение
                                    .location-list-unit-body
                                        a(href="#/").location-list-unit-body-item
                                            | Гардур
                                            .location-list-unit-body-item-total 1

            .filter-list__item
                .filter-list__title Откуда: Москва
                .filter-list__content
                    .location-slider
                        .location-slider-wrap-outer
                            .location-slider-wrap(style="min-width:990px")
                                a(href="#/").location-slider-unit Все
                                a(href="#/").location-slider-unit.active А
                                a(href="#/").location-slider-unit Б
                                a(href="#/").location-slider-unit В
                                a(href="#/").location-slider-unit Г
                                a(href="#/").location-slider-unit Д
                                a(href="#/").location-slider-unit Е
                                a(href="#/").location-slider-unit Ё
                                a(href="#/").location-slider-unit Ж
                        .location-list
                                .location-list-unit
                                    .location-list-unit-title
                                        |А
                                        .location-list-unit-title-total 5 предложений
                                    .location-list-unit-body
                                        a(href="#/").location-list-unit-body-item
                                            | Арзамас
                                            .location-list-unit-body-item-total 1
                                        a(href="#/").location-list-unit-body-item
                                            | Акюрейри
                                            .location-list-unit-body-item-total 4
                                .location-list-unit
                                    .location-list-unit-title
                                        |Б
                                        .location-list-unit-title-total 31 предложение
                                    .location-list-unit-body
                                        a(href="#/").location-list-unit-body-item
                                            | Борганрес
                                            .location-list-unit-body-item-total 3
                                        a(href="#/").location-list-unit-body-item
                                            | Боргарфьордур
                                            .location-list-unit-body-item-total 4
                                        a(href="#/").location-list-unit-body-item
                                            | Бэйстри
                                            .location-list-unit-body-item-total 21
                                        a(href="#/").location-list-unit-body-item
                                            | Бреиддэлсвик
                                            .location-list-unit-body-item-total 2
                                        a(href="#/").location-list-unit-body-item
                                            | Будардалур
                                            .location-list-unit-body-item-total 1
                                .location-list-unit
                                    .location-list-unit-title
                                        |Г
                                        .location-list-unit-title-total 1 предложение
                                    .location-list-unit-body
                                        a(href="#/").location-list-unit-body-item
                                            | Гардур
                                            .location-list-unit-body-item-total 1
            .filter-list__item
                .filter-list__title Все авиакомпании — 15
                .filter-list__content

            .filter-list__item
                .filter-list__title Сначала скидочные предложения
                .filter-list__content

            .filter-list__item
                .filter-list__title Пересадки — 2
                .filter-list__content

        .filter-submit
  vm-button(primary raised) Показать 316 предложений
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import OfferType from './offer-type';

@Component({
    name: 'offer-filter',
    components: {
        OfferType
    }
})
export default class OfferFilter extends Vue {
    activeUnit: string = 'airplane';
}
</script>

<style lang="postcss">

.filter {

  .vm-button {
    width: 100%;
    margin-top: 24px;
    height: 72px;
  }

    &-top {
        padding: 16px;

        & > h1 {
            text-align: center;
			font-size: 14px;
			font-weight: 500;
            line-height: 32px;
            margin-bottom: 16px;
        }
	}

	&-price {
        display: flex;
        width: 100%;
		background: #2F80ED;
		border-radius: 4px;
		padding: 16px 16px 24px 16px;

        &__block {
            flex-grow: 1;
            text-align: left;

            &:last-child {
                text-align: right;
            }

            p {
                font-size: 8px;
                text-transform: uppercase;
                font-weight: 500;
                color: rgba(255,255,255,0.5);
                margin-bottom: 6px;
            }

            span {
                font-size: 18px;
                color:#fff;
                font-weight: 600;
                font-family: "Montserrat";
            }
        }

        &__divider {
            width: 60px;
            position: relative;

            &:before {
                content: "";
                width: 100%;
                height: 1px;
                background-color: rgba(255,255,255,0.4);
                position: absolute;
                top: 75%;
                transform: translateY(-50%);
                left: 0;
            }
        }
	}

	&-slider {
		position: relative;

		&__button {
			position: absolute;
			top: 0;
			width: 30px;
			height: 30px;
			background: #2F80ED;
			border: 10px solid #fff;
			border-radius: 100%;
			transform: translateY(-50%);
			box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);
		}
	}

	&-loc {
		margin-top: 30px;
		padding-right: 5px;
		text-align: right;
		font-size: 9px;
		font-family: "Roboto";
		/* margin-bottom: 10px; */

		&__title {
			display: inline-block;
			position: relative;

			a {
				color: #2F80ED;
				text-decoration: underline;
			}

			&:before {
				position: absolute;
				content: '';
				width: 10px;
				height: 12px;
				top: 2px;
				right: calc(100% + 6px);
				background-image: url(/static/images/icons/icon-location_dark.svg);
				background-repeat: no-repeat;
				background-position: center center;
			}
		}
	}

	&-list {
        background-color: #fff;

		&__item {
			border-top: 1px solid rgba(0,0,0,0.1);

			&:last-child {
				border-bottom: 1px solid rgba(0,0,0,0.1);
			}

			&.active {

				.filter-list-unit-title {

					&:before {
						opacity: 0;
					}

					&:after{
						opacity: 1;
					}
				}

				.filter-list-unit-content {
					height: auto;
				}
			}
        }

        &__title {

            line-height: 15px;
            font-size: 14px;
            font-weight: 500;
            padding: 21px 15px;
            position: relative;

            &:before {
                transition: $transition .3s;
                opacity: 1;
                width: 4px;
                height: 4px;
                background-color: #2F80ED;
                border-radius: 100%;
                top: 50%;
                right: 18px;
                transform: translateY(-50%);
                position: absolute;
                content: "";
            }

            &:after {
                transition: $transition .3s;
                opacity: 0;
                width: 5px;
                height: 5px;
                background-image: url(/static/images/icons/icon-close_small.svg);
                border-radius: 100%;
                top: 50%;
                right: 18px;
                transform: translateY(-50%);
                position: absolute;
                content: "";
            }
        }

        &__content {
            height: 0;
            overflow: hidden;
        }
	}

	&-submit {
		background-color: #fff;
		padding: 16px;
	}
}
</style>

