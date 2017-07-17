<template>
    <div class="topline" v-infinite-scroll="loadMore">
        <Tab :tab="tab" :tab-current="tabCurrent" :tab-click="switchTab"/>
        <div v-if="tabCurrent === 'expert_question'">
            <Question question-class="topline-question" v-for="question in topline" :key="question.id" :question="question"/>
        </div>
        <div v-if="tabCurrent === 'article'">
            <Articles v-for="article in topline" :key="article.id" :article="article.content"/>
        </div>
        <div v-if="tabCurrent === 'expert'">
            <Expert v-for="expert in topline" :key="expert.id" :expert="expert"/>
        </div>
        <loading-notice-component :is-over="isOver" :is-empty="isEmpty" overText="已加载全部" emptyText="空状态"/>
    </div>
</template>

<script>
    import Tab from '../../components/common/tab'
    import Question from '../../components/question/module'
    import Articles from '../../components/article/module'
    import Expert from '../../components/expert/info'
    import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
        name: 'topline',
        data () {
            return {
                tab: [
                    {name: '问答', type: 'expert_question'},
                    {name: '文章', type: 'article'},
                    {name: '智咖', type: 'expert'}
                ],
                tabCurrent: 'expert_question'
            }
        },
        computed: {
            ...mapGetters(['topline']),
            ...mapState({
                loading: state => state.common.loading,
                page: state => state.archive.toplinePage,
                isOver: state => state.archive.toplineIsOver,
                isEmpty: state => state.archive.toplineIsEmpty
            })
        },
        methods: {
            ...mapActions(['getTop']),
            switchTab (name) {
                this.tabCurrent = name
                this.getTop({
                    page: 1,
                    rows: 6,
                    headline: 1,
                    get_userstat: 1,
                    arctype: name
                })
            },
            loadMore () {
                let that = this
                if (that.loading || that.isOver || that.isEmpty || that.page === 1) {
                    return
                }
                that.getTop({
                    page: that.page,
                    rows: 6,
                    headline: 1,
                    get_userstat: 1,
                    arctype: that.tabCurrent
                })
            }
        },
        components: { Tab, Question, Articles, Expert },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('getTop', {
                    page: 1,
                    rows: 6,
                    headline: 1,
                    get_userstat: 1,
                    arctype: 'expert_question'
                })
            })
        }
    }
</script>

<style type="text/sass" lang="scss">
    .topline {
        background: #f2f2f2;
    }
</style>
