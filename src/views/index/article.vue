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
            this.$store.dispatch('getArticleContent')
            console.log(this.$store.state)
        },
        beforeRouteEnter: function (to, from, next) {
            // transition.next()
            // alert('l')
            next(vm => {
                console.log(vm)
            })
        },
        components: { ArticleModule }
    }
</script>

<style type="text/sass" lang="scss">
</style>
