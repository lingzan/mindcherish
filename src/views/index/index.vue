<template>
    <div class="index">
        <SubNav :subnavs="subnavs"/>
        <router-view></router-view>
    </div>
</template>

<script>
    import SubNav from '../../components/nav/subnav'

    export default {
        name: 'index',
        data () {
            return {
                subnavs: [{'name': '首页', 'url': '/'}, {'name': '问答', 'url': '/question'}, {'name': '精选', 'url': '/specify'}, {'name': '文章', 'url': '/article'}]
            }
        },
        computed: {
        },
        components: { SubNav }
    }
</script>

<style type="text/sass" lang="scss">
   .index {
        background: #f2f2f2;
   }
</style>
