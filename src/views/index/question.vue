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
            a: function () {
                console.log(this)
            }
        },
        mounted () {
            console.log(this.$http.get('http://m.mindcherish.com/v1/article/lists?page=2&release_platform=mindcherish&rows=6&orderby=id'))
        },
        components: { QuestionModule }
    }
</script>

<style type="text/sass" lang="scss">
</style>
