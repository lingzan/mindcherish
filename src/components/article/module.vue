<template>
    <div class="article-content">
        <router-link :to="{path: '/article/' + article.content.id}">
            <ImgAutoFit img-fit-class="article-content-img" :img-url="article.content.cover" />
            <h2 class="article-content-title">{{article.content.title}}</h2>
            <p class="article-content-content">{{article.content.summary}}</p>
        </router-link>
        <Operate>
           {{article.content.good_amount}} 赞 · <a :href="article.content.id">{{article.content.comment_amount}} 评价 </a><a :href="classify.id" v-for="classify in article.content.classifys" :key="classify.id">· #{{classify.name}} </a> 
        </Operate>
    </div>
</template>

<script>
    import ImgAutoFit from '../common/imgfit'
    import Operate from '../../components/common/operate'

    export default {
        name: 'article-item',
        props: {
            article: ''
        },
        components: { ImgAutoFit, Operate }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    .article-content {

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
