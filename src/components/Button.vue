<template lang="pug">
button.cs-button(
    @click="$emit('click')"
)
    slot
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
    name: 'cs-button'
})
export default class CsButton extends Vue {

}
</script>

<style lang="postcss">
.cs-button {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 88px;
    padding: 0 16px;
    margin: 0;
    border: none;
    border-radius: 4px;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    font-size: 14px;
    line-height: 40px;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    background: $primary-color;
    color: $primary-text-color;
    @apply --text-nowrap;

    &:hover {
        background: $light-blue-700;
    }
}
</style>
