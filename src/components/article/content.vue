<template>
    <div class="article-content">
        <router-link :to="{path: '/article/' + article.id}">
            <ImgAutoFit v-if="article.cover" img-fit-class="article-content-img" :img-url="article.cover" />
            <h2 class="article-content-title">{{article.title}}</h2>
            <p class="article-content-content">{{article.summary}}</p>
        </router-link>
        <Operate>
           {{article.good_amount}} 赞 · <a :href="article.id">{{article.comment_amount}} 评价 </a><a :href="classify.id" v-for="classify in article.classifys" :key="classify.id">· #{{classify.name}} </a> 
        </Operate>
    </div>
</template>

<script>
    import ImgAutoFit from '../common/imgfit'
    import Operate from '../../components/common/operate'

    export default {
        name: 'article-content',
        props: {
            article: ''
        },
        components: { ImgAutoFit, Operate }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    @import '../../style/func.scss';
    .article-content {

        &-header {
            height: 20px;
            line-height: 20px;
            font-size: pxToRem(13);
            margin-bottom: 9px;
        }
        
        &-content {
            font-size: pxToRem(14);
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
            font-size: pxToRem(18);
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
