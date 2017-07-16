<template>
    <div class="market">
        <Tab :tab="tab" :tab-current="tabCurrent" :tab-click="switchTab"/>
        <div v-if="tabCurrent === 'expert_question'">
            <Question question-class="market-question" v-for="question in market" :key="question.id" :question="question"/>
        </div>
        <div v-if="tabCurrent === 'article'">
            <Articles v-for="article in market" :key="article.id" :article="article.content"/>
        </div>
    </div>
</template>

<script>
    import Tab from '../../components/common/tab'
    import Question from '../../components/question/module'
    import Articles from '../../components/article/module'
    import Expert from '../../components/expert/info'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'market',
        data () {
            return {
                tab: [
                    {name: '问答', type: 'expert_question'},
                    {name: '文章', type: 'article'}
                ],
                tabCurrent: 'expert_question'
            }
        },
        computed: {
            ...mapGetters(['market'])
        },
        methods: {
            ...mapActions(['getMarket']),
            switchTab (name) {
                this.tabCurrent = name
                this.getMarket({
                    page: 1,
                    rows: 6,
                    classify_level: 'market',
                    arctype: name
                })
            }
        },
        components: { Tab, Question, Articles, Expert },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('getMarket', {
                    page: 1,
                    rows: 6,
                    classify_level: 'market',
                    arctype: 'expert_question'
                })
            })
        }
    }
</script>

<style type="text/sass" lang="scss">
    .market {
        background: #f2f2f2;
    }
</style>
