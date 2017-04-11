<template>
    <div class="question">
        <QuestionModule ></QuestionModule>
        <!-- <ArticleModule ></ArticleModule> -->
    </div>
</template>

<script>

    import QuestionModule from '../../components/module/question'
    // import ArticleModule from '../../components/module/article'

    export default {
        name: 'question',
        data () {
            return {
                subnavs: ['首页', '问答', '精选', '文章']
            }
        },
        computed: {
        },
        components: { QuestionModule }
    }
</script>

<style type="text/sass" lang="scss">
</style>
