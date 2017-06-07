<template>
    <section class="live-module">
        <div class="live-module-header">
            <ModuleHeader :actor="live" module-header-class=""/>
        </div>
        <a :href="live.content.id">
            <LiveModule :live-data="live.content" />
        </a>
    </section>
</template>

<script>
    import ModuleHeader from '../flow/moduleHeader'
    import LiveModule from '../live/module'
    import Operate from '../../components/common/operate'
    export default {
        name: 'live-module',
        props: {
            live: ''
        },
        components: { ModuleHeader, LiveModule, Operate }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    .live-module {
        background: #fff;
        margin-top: 10px;
        
        &-header {
            padding:10px 16px 10px;
            border-bottom: 1px solid #f2f2f2;
        }
       
    }
</style>
