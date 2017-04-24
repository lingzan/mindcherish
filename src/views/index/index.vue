<template>
    <div class="index">
        <SubNav :subnavs="subnavs"/>
        <router-view></router-view>
        <SubImgNav :subimg="footernavs" :subclass="subclass"/>  
    </div>
</template>

<script>
    import SubNav from '../../components/nav/subnav'
    import SubImgNav from '../../components/nav/subimgnav'

    export default {
        name: 'index',
        data () {
            return {
                subnavs: [{'name': '首页', 'url': '/'}, {'name': '问答', 'url': '/question'}, {'name': '精选', 'url': '/special'}, {'name': '文章', 'url': '/article'}],
                subclass: 'index-subimg',
                footernavs: [
                    {'name': '首页', 'icon': 'icon-tanzi3', 'url': '/'},
                    {'name': '发现', 'icon': 'icon-faxian', 'url': ''},
                    {'name': '消息', 'icon': 'icon-xaioxi2', 'url': '/msg/notice'},
                    {'name': '我的', 'icon': 'icon-wode2', 'url': '/user'}
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
        
        &-subimg {
            position: fixed;
            left: 0;
            bottom: 0;

            width: 100%;
            height: 3.0625rem;

            border-top: 1px solid #f2f2f2;

            li {
                color: rgba(0,0,0,.25);
            }

            i {
                width: auto;
                height: auto;
                font-size: 1.375rem;
                color: rgba(0,0,0,.25);
            }
        }
        

        .icon-tanzi3 {
        }
        .icon-faxian {
            
        }
        .icon-xaioxi2 {
            
        }
        .icon-wode2 {
            
        }
   }
</style>
