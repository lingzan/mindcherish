<template>
    <div class="indexFlow">
        <QuestionModule ></QuestionModule>
        <ArticleModule ></ArticleModule>
    </div>
</template>

<script>

    import SubNav from '../../components/nav/subnav'
    import QuestionModule from '../../components/module/question'
    import ArticleModule from '../../components/module/article'
    import Focus from '../../components/common/focus'

    export default {
        name: 'index-flow',
        data () {
            return {
                subnavs: ['首页', '问答', '精选', '文章']
            }
        },
        computed: {
        },
        components: { QuestionModule, Focus, ArticleModule, SubNav }
    }
</script>

<style type="text/sass" lang="scss">
</style>
