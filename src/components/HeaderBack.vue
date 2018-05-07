<template lang="pug">
header.header.header_back
    .container
        router-link.header-back(
            :to="{ name: backRouteName }"
        )
            .header-back-icon
            .header-back-title {{ title }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class HeaderBack extends Vue {

    @Prop(String)
    title: string;

    @Prop(String)
    backRouteName: string;
}
</script>