<template>
    <div class="index">
        <QuestionModule ></QuestionModule>
        <ArticleModule ></ArticleModule>
    </div>
</template>

<script>
    import QuestionModule from '../../components/module/question'
    import ArticleModule from '../../components/module/article'
    import Focus from '../../components/common/focus'

    export default {
        name: 'question-show',
        props: {
            subnavs: ''
        },
        data () {
            return {
            }
        },
        computed: {
        },
        components: { QuestionModule, Focus, ArticleModule }
    }
</script>

<style type="text/sass" lang="scss">
   .index {
        background: #f2f2f2;
   }
</style>
