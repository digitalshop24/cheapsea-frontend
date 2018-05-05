<template lang="pug">
.card
    .card-header
        .card-header-info {{ item.name_auto }}
        .card-header-title
            .card-header-title-unit.card-header-title-unit_form {{ item.origin.name }}
            .card-header-title-unit.card-header-title-unit_to {{ item.destination.name }}
    .card-body
        .card-segment
            .card-segment-header
                .card-segment-unit.card-segment-unit_from
                    .card-segment-unit-time {{ item.date_from | time }}
                    .card-segment-unit-title {{ item.origin.name }}
                    .card-segment-unit-date {{ item.date_from | dateWeek }}
                .card-segment-unit.card-segment-unit_to
                    .card-segment-unit-time {{ item.date_to | time }}
                    .card-segment-unit-title {{ item.destination.name }}
                    .card-segment-unit-date {{ item.date_to | dateWeek }}
            .card-segment-path
                .card-segment-path-unit dme
                .card-segment-path-unit hrb
                .card-segment-path-unit vvo
                .card-segment-path-unit khk

    .card-result
        .card-result-button от ₽ {{ item.price }}
        .card-result-icons
            .card-result-icons-unit.card-result-icons-unit_wing
            .card-result-icons-unit.card-result-icons-unit_wing
            .card-result-icons-unit.card-result-icons-unit_weight 8
            .card-result-icons-unit.card-result-icons-unit_luggage
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Chips extends Vue {

    @Prop() 
    item;
}
</script>

<style lang="postcss">
.card {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
  margin-bottom: 11px; }
  .card:last-child {
    margin-bottom: 0; }
  .card-header {
    padding: 14px 10px 18px 10px;
    overflow: hidden;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    color: #fff;
    background-image: url(/static/images/more.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; }
    .card-header-info {
      font-size: 10px;
      line-height: 12px;
      margin-bottom: 7px; }
    .card-header-title {
      padding-left: 26px;
      font-size: 18px;
      line-height: 22px;
      font-weight: 800; }
      .card-header-title-unit {
        margin-bottom: 5px; }
        .card-header-title-unit:last-child {
          margin-bottom: 0; }
  .card.twoSides .card-header-title {
    background-image: url(/static/images/icons/icon-arrows_vertical.svg);
    background-repeat: no-repeat;
    background-position: left 2px center; }
  .card.oneSide .card-header-title {
    background-image: url(/static/images/icons/icons-arrows_vertical_bottom.svg);
    background-repeat: no-repeat;
    background-position: left 2px center; }
  .card-segment {
    position: relative;
    padding: 15px 10px 20px 10px;
    border-bottom: 1px solid #E0E0E0; }
    .card-segment:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 60px;
      height: 5px;
      border-radius: 3px;
      background-color: #E5E5E5; }
    .card-segment:last-child:after {
      display: none; }
    .card-segment-header {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex; }
    .card-segment-unit_to {
      text-align: right; }
    .card-segment-unit-time {
      margin-bottom: 2px;
      font-size: 18px;
      line-height: 22px;
      font-weight: 500; }
    .card-segment-unit-title {
      font-weight: 500;
      margin-bottom: -2px; }
    .card-segment-unit-date {
      color: #828282;
      font-size: 10px; 
      text-transform: capitalize;
      }
      
    .card-segment-path {
      font-family: 'Roboto', sans-serif;
      margin-top: 13px;
      padding: 0 12px;
      padding-top: 29px;
      font-size: 10px;
      text-transform: uppercase;
      color: #828282;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      background-color: #F8F8F8;
      border-radius: 3px;
      height: 50px;
      position: relative; }
      .card-segment-path:before {
        content: "";
        width: calc(100% - 40px);
        height: 1px;
        background-color: #5BDEBE;
        position: absolute;
        top: 16px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%); }
      .card-segment-path-unit {
        position: relative; }
        .card-segment-path-unit:before {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          background-color: #F8F8F8;
          content: "";
          bottom: calc(100% + 10px);
          left: 50%;
          -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          transform: translateX(-50%);
          position: absolute;
          width: 8px;
          height: 5px;
          border-radius: 3px;
          border: 1px solid #5BDEBE; }
  .card-result {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 10px 12px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between; }
    .card-result-button {
      background: #2F80ED;
      height: 36px;
      line-height: 36px;
      color: #fff;
      font-size: 14px;
      padding: 0 10px;
      font-weight: 500;
      border-radius: 2px; }
    .card-result-icons {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex; }
      .card-result-icons-unit_wing {
        background-image: url(/static/images/icons/icon-wing.png);
        width: 26px;
        height: 20px; }
      .card-result-icons-unit_weight {
        line-height: 25px;
        margin-right: 10px;
        color: #202020;
        text-align: center;
        font-size: 10px;
        width: 12px;
        height: 19px;
        background-image: url(/static/images/icons/icon-weight.svg);
        margin-left: 26px; }
      .card-result-icons-unit_luggage {
        margin-right: 10px;
        width: 12px;
        height: 19px;
        background-position: center center;
        background-image: url(/static/images/icons/icon-luggage.svg); }


</style>
