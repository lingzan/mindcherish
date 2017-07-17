<template>
    <div class="flow" v-infinite-scroll="loadMore">    
        <div class="flow-item" v-for="item in flows" :key="item.id">
            <QuestionModule :question="item" v-if="(item.type.indexOf('expert_question') !== -1)" />
            <ArticleModule :article="item" v-if="(item.type.indexOf('article') !== -1)" />
            <RewardModule :reward="item" v-if="(item.type.indexOf('reward') !== -1)"/>
            <LiveModule :live="item" v-if="(item.type.indexOf('live') !== -1)"/>
            <FineModule  :fine="item" v-if="(item.type.indexOf('fine') !== -1)"/>
        </div>
        <LoadNotice :is-over="isOver" :is-empty="isEmpty" overText="已加载全部" emptyText="空状态"/>
    </div>
</template>

<script>

    import QuestionModule from '../../components/module/question'
    import ArticleModule from '../../components/module/article'
    import RewardModule from '../../components/module/reward'
    import LiveModule from '../../components/module/live'
    import FineModule from '../../components/module/fine'
    import Focus from '../../components/common/focus'
    import LoadNotice from '../../components/common/loadNotice'
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        name: 'index-flow',
        data () {
            return {
                subnavs: ['首页', '问答', '精选', '文章']
            }
        },
        computed: {
            ...mapGetters({
                flows: 'flowList',
                loading: 'getLoading',
                flowLastId: 'flowLastId'
            }),
            ...mapState({
                isOver: state => state.flow.isOver,
                isEmpty: state => state.flow.isEmpty
            })
        },
        methods: {
            ...mapActions(['getFlowList']),
            getScrollTop: function (element) {
                if (element) {
                    return element.scrollTop
                } else {
                    return document.documentElement.scrollTop
                }
            },
            getVisibleHeight: function (element) {
                if (element) {
                    return element.offsetHeight
                } else {
                    return document.documentElement.offsetHeight
                }
            },
            loadMore () {
                if (this.loading || this.isOver || this.isEmpty) {
                    return
                }
                this.getFlowList(this.flowLastId)
            }
        },
        beforeRouteEnter: function (to, from, next) {
            next(vm => {
                vm.$store.dispatch('getFlowList', '')
            })
        },
        components: { QuestionModule, Focus, ArticleModule, LiveModule, RewardModule, FineModule, LoadNotice }
    }
</script>

<style type="text/sass" lang="scss">
    .flow {
        margin-bottom: 54px;

        &-item {
            margin-top: 10px;
        }
    }
    * {
        padding: 0;
        margin: 0;
    }
</style>
