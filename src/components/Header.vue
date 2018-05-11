<template lang="pug">
.app-header
    .app-header__wrapper
        vm-button.app-header__back
            vm-icon arrow_back

        h1 {{ title }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class HeaderBack extends Vue {

    @Prop(String)
    title: string;

    @Prop(String)
    backRouteName: string;

    @Prop(Boolean)
    customEvent: boolean;

    back() {
        if (!this.customEvent) {
            this.$router.go(-1);
        }
        
        this.$emit('back');
    }
}
</script>

<style lang="postcss">

.app-header {
    height: $header-height;
    font-size: 14px;
    position: fixed;
    top: 0;
	left: 0;
    z-index: 100;
    width: 100%;
    margin: auto;
    box-shadow: $shadow-1;

    + * {
        padding-top: $header-height;
    }

    &__back {
        width: 64px;
        height: 100%;
    }

    &__wrapper {
        box: horizontal middle;
        height: 100%;
        max-width: $md;
        margin: auto;
    }

    h1 {
        font-size: 16px;
        font-weight: 500;
        flex-grow: 1;
    }
}

.header{
	
	background-color: #fff;
	
	
	width:100%;
	background-color: #fff;
}

</style>
