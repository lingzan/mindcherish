<template>
    <div class="index">
        <SubNav :subnavs="subnavs"/>
        <router-view></router-view>
        <SubImgNav :subimg="footernavs"/>  
    </div>
</template>

<script>
    import SubNav from '../../components/nav/subnav'
    import SubImgNav from '../../components/nav/subimgnav'

    export default {
        name: 'index',
        data () {
            return {
                subnavs: [{'name': '首页', 'url': '/'}, {'name': '问答', 'url': '/question'}, {'name': '精选', 'url': '/specify'}, {'name': '文章', 'url': '/article'}],
                footernavs: [
                    {'name': '钱包', 'icon': 'icon-tanzi3', 'url': ''},
                    {'name': '优惠券', 'icon': 'icon-faxian', 'url': ''},
                    {'name': '邀请', 'icon': 'icon-xaioxi2', 'url': ''},
                    {'name': '关注', 'icon': 'icon-wode2', 'url': ''}
                ]
            }
        },
        computed: {
        },
        components: { SubNav, SubImgNav }
    }
</script>

<style type="text/sass" lang="scss">
   .index {
        background: #f2f2f2;
        
        i {
            color: rgba(0,0,0,.25);
        }
        .icon-tanzi3 {
            color: rgba(0,0,0,.25);
        }
        .icon-faxian {
            
        }
        .icon-xaioxi2 {
            
        }
        .icon-wode2 {
            
        }
   }
</style>
