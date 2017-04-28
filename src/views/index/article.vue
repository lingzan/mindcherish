<template>
    <div class="indexFlow">
        <ArticleModule v-for="item in article" :key="item.id"></ArticleModule>
    </div>
</template>

<script>
    import ArticleModule from '../../components/module/article'
    import {mapGetters} from 'vuex'

    export default {
        name: 'index-flow',
        data () {
            return {}
        },
        computed: mapGetters({
            article: 'articleList'
        }),
        created () {
            this.$store.dispatch('getArticleList')
        },
        components: { ArticleModule }
    }
</script>

<style type="text/sass" lang="scss">
</style>
