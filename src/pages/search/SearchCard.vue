<template lang="pug">
.card
    .card-header
        p {{ item.origin && item.origin.name }}
        p {{ item.destination && item.destination.name }}
        .card-header__directions
            svg-arrow
    
    .card-body
        .card-body__points
            .card-body__point 
                p {{ item.date_from | time }}
                p {{ item.origin.name }}
                p {{ item.date_from | dateWeek }}
            .card-body__point 
                p {{ item.date_to | time }}
                p {{ item.destination.name }}
                p {{ item.date_to | dateWeek }}
        .card-body__path
            .card-body__path-item {{ String(item.from_airport) }}
            .card-body__path-item {{ String(item.to_airport) }}

    .card-footer
        .card-footer__icons
            i.material-icons flight
            i.material-icons local_mall
            i.material-icons local_dining
        cs-button от {{ item.price | money }} ₽
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SvgArrow from '@/assets/arrow.svg';
import acc from 'accounting';

@Component({
    name: 'card',
    components: {
        'svg-arrow': SvgArrow
    }
})
export default class SearchCard extends Vue {

    @Prop() 
    item;
}
</script>

<style lang="postcss">
.card {
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 16px;
    box-shadow: $shadow-2;
    
    &-header {
        position: relative;
        font-size: 18px;
        line-height: 28px;
        font-weight: 600;
        padding: 16px;
        padding-left: 56px;
        height: 88px;
        color: #FFF;
        background: url(/static/images/more.jpg) no-repeat;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;

        &__directions {
            position: absolute;
            left: 16px;
            height: 56px;
            top: 28px;

            svg {
                width: 12px;
            }
        }
    }
    &-body {
        padding: 16px;

        &__path {
            box: horizontal space-between;
            font-family: 'Roboto', sans-serif;
            margin-top: 13px;
            padding: 0 12px;
            padding-top: 29px;
            font-size: 10px;
            text-transform: uppercase;
            color: #828282;
            background-color: #F8F8F8;
            border-radius: 3px;
            height: 50px;
            position: relative;

            &:before {
                content: "";
                width: calc(100% - 40px);
                height: 2px;
                background-color: $primary-color;
                position: absolute;
                top: 16px;
                left: 50%;
                transform: translateX(-50%);
            }

            &-item {
                position: relative;

                &:before {
                    content: "";
                    size: 10px;
                    box-sizing: border-box;
                    background-color: $primary-color;
                    bottom: calc(100% + 10px);
                    left: 7px;
                    top: -17px;
                    position: absolute;
                    border-radius: 50%;
                    border: 1px solid $primary-color; 
                }
            }
        }

        &__points {
            box: horizontal space-between;
        }

        &__point {
            font-size: 17px;
            line-height: 22px;
            font-weight: 500;

            &:last-child {
                text-align: right;
            }

            p {

                &:last-child {
                    color: $grey-600;
                    font-size: 12px;
                }
            }
        }
    }

    &-footer {
        box: horizontal middle space-between;
        padding: 12px 16px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        i { 
            color: $grey-600;
            margin-right: 8px;
        }
    }
}
</style>
