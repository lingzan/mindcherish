<template>
    <div class="msg">
        <SubNav :subnavs="subnavs" />
        <router-view></router-view>
    </div>
</template>

<script>
    import SubNav from '../../components/nav/subnav'

    export default {
        name: 'msg',
        data () {
            return {
                subnavs: [
                    {'name': '通知', 'url': '/msg/notice'},
                    {'name': '私信', 'url': '/msg/chat'},
                    {'name': '关注', 'url': '/msg/attention'}
                ]
            }
        },
        components: { SubNav }
    }
</script>

<style type="text/sass" lang="scss">
    .msg {

    }
</style>
