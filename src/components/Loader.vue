<template lang="pug">
.cs-loader
    .cs-loader__spin
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
    name: 'cs-loader'
})
export default class CsLoader extends Vue {

}
</script>

<style lang="postcss">
.cs-loader {
    box: horizontal center middle;
    margin-top: 40px;

    &__spin {
        size: 40px;
        border-radius: 50%;
        border-width: 3px;
        border-style: solid;
        animation: spin 1s infinite linear;
        margin: auto;
        border-color: $grey-200;
        border-top-color: #2F80ED;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
