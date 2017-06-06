<template>
    <div class="flow">
            {{loading === false}}
        <div class="flow-item" v-for="item in flows" :key="item.id">
            {{item.type}}
            <QuestionModule :question="item" v-if="(item.type.indexOf('expert_question') !== -1)"></QuestionModule>
            <ArticleModule :article="item" v-if="(item.type.indexOf('article') !== -1)"></ArticleModule>
            <div v-if="item.type.indexOf('live') !== -1">live</div>
            <div v-if="item.type.indexOf('reward') !== -1">reward</div>
            <RewardModule :reward="item" v-if="(item.type.indexOf('reward') !== -1)"/>
            <LiveModule :live="item" v-if="(item.type.indexOf('live') !== -1)"/>

        </div>
        <QuestionModule />
        <ArticleModule />
    </div>
</template>

<script>

    import QuestionModule from '../../components/module/question'
    import ArticleModule from '../../components/module/article'
    import RewardModule from '../../components/module/reward'
    import LiveModule from '../../components/module/live'
    import Focus from '../../components/common/focus'
    import {mapGetters} from 'vuex'

    export default {
        name: 'index-flow',
        data () {
            return {
                subnavs: ['首页', '问答', '精选', '文章']
            }
        },
        computed: mapGetters({
            flows: 'flowList',
            loading: 'getLoading',
            flowLastId: 'flowLastId'
        }),
        beforeRouteEnter: function (to, from, next) {
            // transition.next()
            // alert('l')
            next(vm => {
                console.log('vm', vm.$store.state)
                vm.$store.dispatch('getFlowList')
                console.log('vm2', vm.$store.state)
            })
            console.log(to, from)
        },
        components: { QuestionModule, Focus, ArticleModule, LiveModule, RewardModule }
    }
</script>

<style type="text/sass" lang="scss">
    .flow {
        padding-bottom: 54px;
    }
</style>
