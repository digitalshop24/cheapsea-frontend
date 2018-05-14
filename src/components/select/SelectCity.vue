<template lang="pug">
vm-select.cities(
    v-model="selectValue"
    v-bind="$attrs"
    filter="field|async"
    hideArrow
    showClearButton
    nooverlay
    async
    :loading="requesting"
    @input="onInput"
    @select="onSelect"
    @close="onClose"
    @focus="onFocus"
)
    vm-option(
        v-if="cities && cities.length === 0"
        readonly
    ) Нет совпадений

    vm-option(
        v-for="(city, idx) in cities"
        :key="city.name + idx"
        :value="city.id"
    ) {{ city.name }}
</template>

<script lang="ts">
import config from '@/config.json';
import axios, { CancelTokenSource } from "axios";
import { Vue, Component, Prop } from "vue-property-decorator";
import { snackbar } from 'vue-mapp/es5/snackbar';
import { get } from 'http';

let cancelSource: CancelTokenSource | null = null;

@Component({
    model: {
        prop: 'value',
        event: 'select'
    }
})
export default class OffersModule extends Vue {

    @Prop() value: string;

    focused: boolean = false;
    cities: any[] | null = null;
    selectValue: string = '';
    requesting: boolean = false;

    private onInput(value) {
        if (!this.focused) return;

        if (cancelSource) {
            cancelSource.cancel("canceled");
            cancelSource = null;
        }

        if (value.length > 2) {
            this.getCities(value);
        } else {
            this.requesting = false;
        }
    }

    private onSelect() {
        this.cities = null;
        this.$emit('select', this.selectValue);
    }

    private onFocus() {
        this.focused = true;
    }

    private onClose() {
        this.cities = null;
        this.focused = false;
    }

    async getCities(inputValue) {

        const token = axios.CancelToken;
        const source = token.source();

        this.requesting = true;
        cancelSource = source;
        
        try {
            const res = await axios.post(config.links.cities, {
                query: inputValue.trim()
            }, {
                cancelToken: source.token,
                timeout: 5000
            });

            this.cities = res.data.slice(0, 100);
            this.requesting = false;
            cancelSource = null;
        } catch (err) {

            if (err.message === 'canceled') {

            } else {
                this.requesting = false;

                snackbar({
                    text: err.message
                });
            }
        } finally {
            
        }
    }
}
</script>

<style lang="postcss">

.cities {

    &__nodata {
        padding: 16px;
    }
}

</style>
