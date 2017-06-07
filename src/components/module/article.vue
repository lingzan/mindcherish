<template>
    <section class="article-module">
        <ModuleHeader :actor="articles" />
        <h2 class="article-module-title">{{articles.content.title}}</h2>
        <ImgAutoFit autofit-size="article-module-img" :img-url="articles.content.cover" />
        <p class="article-module-content">{{articles.content.summary}}</p>
        <Operate>
           {{articles.content.good_amount}} 赞 · <a :href="articles.content.id">{{articles.content.comment_amount}} 评价 </a><a :href="classify.id" v-for="classify in articles.content.classifys" :key="classify.id">· #{{classify.name}} </a> 
        </Operate>
    </section>
</template>

<script>
    import Avatar from '../../components/avatar/user'
    import Qa from '../../components/question/qa'
    import User from '../../components/common/User'
    import ImgAutoFit from '../../components/common/imgfit'
    import ModuleHeader from '../flow/moduleHeader'
    import Operate from '../../components/common/operate'

    export default {
        name: 'article-module',
        props: {
            articles: ''
        },
        components: { Avatar, Qa, Operate, User, ImgAutoFit, ModuleHeader }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
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
            margin:6px 0 8px;
            font-size: 18px;
            line-height: 23px;
            font-weight: 500;

            @include textOverflow(2)
        }

        &-content {
            margin-bottom: 14px;
            @include textOverflow(3)
        }

        
    }
</style>
