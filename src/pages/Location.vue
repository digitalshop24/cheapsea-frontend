<template lang="pug">
.location 

    Header.box-primary(
        type="back"
        title="Мое местоположение"
        @back="$router.push('/front')"
    )

    form.location-wrap

        .location-icon
        .location-subtitle Определить автоматически
        .location-title Балашиха
        .location-input
            input(type="text" value="Вся Россия")
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
                .location-list-unit-title А
                .location-list-unit-body
                    a(href="#/").location-list-unit-body-item Арзамас
                    a(href="#/").location-list-unit-body-item Айнанэйск
            .location-list-unit
                .location-list-unit-title Б
                .location-list-unit-body
                    a(href="#/").location-list-unit-body-item Бабаба
                    a(href="#/").location-list-unit-body-item Ббабаба
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import RoutePage from "@/core/route";

@Component({
  name: "offers-page",
  inheritAttrs: false
})
export default class OffersRoute extends RoutePage {
  get offers() {
    return this.$route.params.offers;
  }
}
</script>

<style lang="postcss">
.location {
    padding-top: 60px;
  
    &-icon {
        width: 28px;
        height: 28px;
        border-radius: 100%;
        margin: 0 auto;
        background: #ffffff;
        background-image: url(/static/images/icons/icon-location.svg);
        background-position: 8px 9px;
        background-repeat: no-repeat;
        box-shadow: 0px 2px 14px rgba(47, 128, 237, 0.2);
        margin-bottom: 25px;
    }

    &-subtitle {
        text-align: center;
        margin-bottom: 12px;
    }

    &-title {
        text-align: center;
        font-size: 18px;
        line-height: 18px;
        font-weight: 600;
        margin-bottom: 35px;
    }

    &-input {
        padding: 0 15px;
        background-image: url(/static/images/icons/icon-search_dark.svg);
        background-position: right 15px center;
        background-repeat: no-repeat;
        input {
        font-family: "Montserrat";
        font-size: 12px;
        font-weight: 500;
        background-color: transparent;
        width: 100%;
        height: 28px;
        border: none;
        border-bottom: 1px solid #bdbdbd;
        }
    }

    &-body {
        background-color: #fff;
    }

    &-slider {
        
        &-unit {
            background: #ffffff;
            box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);
            border-radius: 4px;
            width: 100px;
            height: 64px;
            text-align: center;
            line-height: 64px;
            border: 1px solid transparent;
            margin-right: 10px;
        
            &:last-child {
                margin-right: 0;
            }

            &.active {
                border: 1px solid #2f80ed;
            }
        }

        &-wrap {
            padding-top: 20px;
            padding-bottom: 17px;
            display: flex;
            margin: 0 15px;
           
            &-outer {
                -webkit-overflow-scrolling: touch;
                overflow: auto;
            }
        }
    }

    &-list {

        &-unit {
        
            &-title {
                line-height: 24px;
                font-size: 9px;
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
                padding: 0 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                
                &-total {
                    color: #828282;
                    font-size: 9px;
                    font-family: "Roboto";
                }
            }

            &-body {
                padding: 9px 14px;
                
                &-item {
                    padding: 5px 15px;
                    line-height: 15px;
                    color: #4f4f4f;
                    font-size: 12px;
                    font-weight: 500;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 40px;
                    
                    &.active {
                        background: #f7f7f7;
                    }
                    
                    &-total {
                        color: #8a8a8a;
                        font-size: 12px;
                        font-weight: 500;
                    }
                }
            }
        }
    }
}
</style>
