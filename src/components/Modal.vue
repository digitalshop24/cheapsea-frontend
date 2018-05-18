<template lang="pug">
.app-modal.box
    app-header
        slot(name="header")
    
    .app-modal__content
        slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class AppModal extends Vue {

    created() {
        const html = document.getElementsByTagName('html')[0];
        
        html.style.overflow = 'hidden';
    }

    beforeDestroy() {
        const html = document.getElementsByTagName('html')[0];
        
        html.style.overflow = null;
    }
}
</script>

<style lang="postcss">

.app-modal {
    size: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    overflow: auto;

    &__content {
        max-width: $md;
        margin: auto;
    }
}

</style>
