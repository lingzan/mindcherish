<template>
    <div class="article-operate">
        <Operate><span slot="left"><i class="iconfont icon-shoucang1"></i></span><span slot="right"><router-link to='/comment' class="mr20"><i class="iconfont icon-pinglun"></i>32</router-link><span><i class="iconfont icon-thumbs-up"></i>32</span></span></Operate>
    </div>
</template>

<script>
    import Operate from '../../components/common/operate'
    export default {
        name: 'article-operate',
        components: { Operate }
    }
</script>

<style type="text/sass" lang="scss">
    .article-operate {
        width: 100%;
        font-size: 14px;
        
        a {
           color: rgba(0,0,0,.25); 
        }
        .icon-shoucang1 {
            margin-right: 3px;
            font-size: 14px;
            color: rgba(0,0,0,.18);
        }
        .icon-pinglun {
            position: relative;
            top: 1px;

            margin-right: 3px;
            font-size: 14px;
        }

        .icon-thumbs-up {
            position: relative;
            top: 1px;

            margin-right: 3px;
        }
        .mr20 {
            margin-right: 20px;
        }
    }
</style>
