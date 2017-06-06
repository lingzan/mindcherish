<template>
    <div class="article-module">
        <slot>
            <div class="clearfix article-module-header">
                <Avatar imgsize='20'img-class="article-module-avatar"/>
                <span class="article-module-author">张昭 发布了文章</span>
                <span class="fr">7 分钟前</span>
            </div>
        </slot>
        <h2 class="article-module-title">请问你觉得精神和灵魂是一回事吗，怎么如果不是的话有什么区别</h2>
        <ImgAutoFit autofit-size="article-module-img" />
        <p class="article-module-content">广式甜品里，一直觉得姜撞奶是美味又有趣的存在只需要简单的姜汁与牛奶，就能碰撞出布丁质感的嫩滑甜品。前两周飞去广东顺德吃了一趟，回来后各...</p>
        <ArticleOperate>
            <span slot="left">提问价 500 元<em> · </em>104 人技能已get</span>
            <span slot="right"><i class="iconfont icon-thumbs-up"></i>32<i class="iconfont icon-thumbs-down"></i>32</span>
        </ArticleOperate>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'
    import Qa from '../../components/question/qa'
    import ArticleOperate from '../../components/article/operate'
    import User from '../../components/common/User'
    import ImgAutoFit from '../../components/common/imgfit'

    export default {
        name: 'article-module',
        props: {
            subnavs: ''
        },
        data () {
            return {
            }
        },
        computed: {
        },
        components: { Avatar, Qa, ArticleOperate, User, ImgAutoFit }
    }
</script>

<style type="text/sass" lang="scss">
    .article-module {
        padding: 14px 16px;
        margin-bottom: 10px;
        background: #fff;

        &:last-child {
            margin-bottom: 0;
        }
        
        &-header {
            height: 20px;
            line-height: 20px;
            font-size: 13px;
            margin-bottom: 9px;
        }
        
        &-content {
            font-size: 14px;
            line-height: 21px;
            color: rgba(0,0,0,.54)
        }
        
        &-img {
            width:100% ;
            height: 150px !important;
            margin-bottom: 10px;
        }

        &-avatar {
            float: left;
        }
        
        &-author {
            margin-left: 3px; 
        }

        &-title {
            margin-bottom: 8px;
            font-size: 18px;
            line-height: 23px;
            font-weight: 500;
        }

        &-content {
            margin-bottom: 14px;
        }

        
    }
</style>
