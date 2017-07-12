<template>
    <div class="article">
        <div v-for="item in articles" :key="item.id" class="article-item">
            <User user-class="article-item-header" :user="item.author">
                <span class="article-item-time">{{dateFormat(item.date)}}</span>
            </User>
            <ArticleModule :article="item" />
            
        </div>
    </div>
</template>

<script>
    import ArticleModule from '../../components/article/module'
    import User from '../../components/common/user'
    import Tool from '../../util/tool'
    import {mapGetters} from 'vuex'

    export default {
        name: 'article-list',
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
            },
            dateFormat: (date) => {
                return Tool.dateFormat(date)
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
        components: { ArticleModule, User }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .article{
        &-item {
            padding: 14px 16px;
            margin-top: 10px;
            background: #fff;
            &:last-child {
                margin-bottom: 0;
            }
            &-header {
                min-height: 40px;
                margin-bottom: 12px;
            }
            &-time {
                 font-size: pxToRem(14);
                color: #9e9e9e
            }
        }
    }
</style>
