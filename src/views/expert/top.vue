<template>
    <div class="topline">
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
    </div>
</template>

<script>
    import Tab from '../../components/common/tab'
    import Question from '../../components/question/module'
    import Articles from '../../components/article/module'
    import Expert from '../../components/expert/info'
    import {mapGetters, mapActions} from 'vuex'
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
            ...mapGetters(['topline'])
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
