<template>
    <div class="article">
        <ArticleModule v-for="item in articles" :key="item.id" :articles="articleFormat(item)" /></ArticleModule>
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
            articles: 'articleList',
            scrollTop: 'getScrollTop'
        }),
        methods: {
            articleFormat: (article) => {
                let _article = {}
                _article.content = article
                return _article
            }
        },
        created () {
            // console.log(this.$store.state)
            // this.$store.dispatch('getArticleList')
            // this.$store.dispatch('getArticleContent')
        },
        beforeRouteEnter: function (to, from, next) {
            // transition.next()
            // alert('l')
            if (from.path.indexOf('/comment') === -1) {
                next(vm => {
                    vm.$store.dispatch('getArticleList')
                    // vm.$store.dispatch('getArticleContent')
                })
            } else {
                next(vm => {
                    console.log('scrollTop')
                    document.body.scrollTop = vm.$store.state.c.scrollTop
                })
            }
            console.log(to, from)
        },
        beforeRouteLeave: function (to, from, next) {
            this.$store.dispatch('setScrollTop', document.body.scrollTop)
            next()
        },
        components: { ArticleModule }
    }
</script>

<style type="text/sass" lang="scss">
</style>
