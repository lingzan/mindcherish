<template>
    <div class="live-module">
        <ModuleHeader user="{'face': ''}"/>
    </div>
</template>

<script>
    import ModuleHeader from '../flow/moduleHeader'
    export default {
        name: 'live-module',
        props: {
            data: ''
        },
        components: { ModuleHeader }
    }
</script>

<style type="text/sass" lang="scss">
    .live-module {
        background: #fff;
    }
</style>
