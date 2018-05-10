<template lang="pug">
header.header.header_back
    .container
        .header-back(
            @click="back"
        )
            vm-button.header-back(primary)
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

.header {
    height: 48px;
    font-size: 14px;

    &-back {

        button {
            width: 56px;
            height: 48px;
            color: $primary-color;
        }

        h1 {
            font-size: 14px;
            font-weight: 500;
            color: $primary-color;
        }
    }
}

.header{
	z-index: 3;
	background-color: #fff;
	position: fixed;
	top:0;
	left:0;
	width:100%;
	background-color: #fff;
}

</style>
