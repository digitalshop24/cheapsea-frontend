<template lang="pug">
.front
    .front-head
        img(src="/static/images/front-head.jpg")
        .front-head__search
            router-link(to="search")
                cs-button Поиск
</template>

<script lang="ts">
import RoutePage from '@/core/route';
import { Component } from 'vue-property-decorator';
import axios from 'axios';

@Component({
    name: 'offers-page'
})
export default class FrontRoute extends RoutePage {
    title = 'Assign';

    offers: any[] = [];

    getOffers() {
        axios.get('/offers?offer_type=airplane')
            .then(res => {
                this.offers = res.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    created() {
        this.getOffers();
    }
}
</script>

<style lang="postcss">
.front {

    &-head {
        position: relative;
        overflow: hidden;
        border-radius: 4px;

        img {
            width: 100%;
            display: block;
        }

        &__search {
            box: horizontal middle right;
            position: absolute;
            width: $md;
            max-width: calc(100% - 48px);
            height: 104px;
            background: #FFF;
            right: 0;
            left: 0;
            bottom: 40px;
            margin: auto;
            border-radius: 4px;
            padding: 24px;
        }
    }
}

</style>
