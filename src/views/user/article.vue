<template>
    <div class="my-article">
    <!-- {{userLive}} -->
        <Tab :tab="tabs"
             :tab-current="current"
             :tab-click="switchTab"
             tab-class="my-article-tab"/>
        <section class="my-article-item" v-for="article in userArticle">
            <ArticleModule :article="article"/>
        </section>
    </div>
</template>

<script>
    import ArticleModule from '../../components/article/module'
    import Tab from '../../components/common/tab'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'my-article',
        data () {
            return {
                tabs: [
                    { name: '已发布', type: '1' },
                    { name: '审核中', type: '0' }
                ],
                current: '1'
            }
        },
        computed: {
            ...mapGetters(['userArticle'])
        },
        methods: {
            ...mapActions({getUserArticle: 'userArticle'}),
            switchTab (name) {
                if (this.current === name) {
                    return
                }
                this.current = name
                var _data = {}
                _data.page = 1
                _data.rows = 10
                _data.author_userid = this.$route.params.id
                _data.article_status = this.current
                this.getUserArticle(_data)
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
            //      author_userid 用户id
            // @var article_status  1|0
                vm.$store.dispatch('userArticle', {
                    page: 1,
                    rows: 10,
                    author_userid: to.params.id,
                    article_status: 1
                })
            })
        },
        components: {ArticleModule, Tab}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    .my-article {
        background: #f2f2f2;
        &-tab {
            margin-bottom: 10px;
        }
        &-item {
            padding: 16px;
            background: #fff;
            margin-bottom: 10px;
        }
    }
</style>
