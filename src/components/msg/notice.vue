<template>
    <div class="notice">
        <Clomun />
    </div>
</template>

<script>
    import Clomun from '../../components/msg/clomun'

    export default {
        name: 'notice',
        data () {
            return {
                subnavs: [{'name': '首页', 'url': '/'}, {'name': '问答', 'url': '/question'}, {'name': '精选', 'url': '/specify'}, {'name': '文章', 'url': '/article'}],
                subclass: 'index-subimg',
                footernavs: [
                    {'name': '首页', 'icon': 'icon-tanzi3', 'url': '/'},
                    {'name': '发现', 'icon': 'icon-faxian', 'url': ''},
                    {'name': '消息', 'icon': 'icon-xaioxi2', 'url': '/msg'},
                    {'name': '我的', 'icon': 'icon-wode2', 'url': '/user'}
                ]
            }
        },
        computed: {
        },
        components: { Clomun }
    }
</script>

<style type="text/sass" lang="scss">
   .notice {
        background: #f2f2f2;
   }
</style>
