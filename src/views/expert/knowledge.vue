<template>
    <div class="knowledge">
        <Tab :tab="tab" :tab-current="tabCurrent" :tab-click="switchTab"/>
        <div v-if="tabCurrent === 'expert_question'">
            <Question question-class="knowledge-question" :key="question.id" v-for="question in knowledge" :question="question"/>
        </div>
        <div v-if="tabCurrent === 'article'">
            <Articles v-for="article in knowledge" :key="article.id" :article="article.content"/>
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
        name: 'knowledge',
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
            ...mapGetters(['knowledge'])
        },
        methods: {
            ...mapActions(['getKnowledge']),
            switchTab (name) {
                this.tabCurrent = name
                this.getKnowledge({
                    page: 1,
                    rows: 6,
                    classify_level: 'knowledge',
                    arctype: name
                })
            }
        },
        components: { Tab, Question, Articles, Expert },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('getKnowledge', {
                    page: 1,
                    rows: 6,
                    classify_level: 'knowledge',
                    arctype: 'expert_question'
                })
            })
        }
    }
</script>

<style type="text/sass" lang="scss">
    .knowledge {
        background: #f2f2f2;
    }
</style>
