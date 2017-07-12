<template>
    <article class="article-item" :class="articleClass">
        <User user-class="article-item-header" :user="article.author">
            <span class="article-item-time">{{dateFormat(article.date)}}</span>
        </User>
        <ArticleContent :article="article" />
    </article>
</template>

<script>
    import ArticleContent from '../article/content'
    import User from '../common/user'
    import Tool from '../../util/tool'

    export default {
        name: 'article-item',
        props: {
            article: '',
            articleClass: ''
        },
        methods: {
            articleFormat: (article) => {
                let _article = {}
                _article.content = article
                return _article
            },
            dateFormat: (date) => {
                return Tool.dateFormat(date)
            }
        },
        components: { ArticleContent, User }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    @import '../../style/func.scss';
    .article-item {
        background: #fff;
        &-header {
            height: 20px;
            line-height: 20px;
            font-size: pxToRem(13);
            margin-bottom: 9px;
        }     
    }
</style>
