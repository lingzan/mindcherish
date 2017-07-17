<template>
    <div class="question-list" v-infinite-scroll="loadMore">
        <QuestionModule v-for="question in questions" :key="question.id" :question="questionFormat(question)"/>
        <loading-notice-component :is-over="isOver" :is-empty="isEmpty" overText="已加载全部" emptyText="空状态"/>
    </div>
</template>

<script>
    import QuestionModule from '../../components/question/module'
    import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
        name: 'question-list',
        computed: {
            ...mapGetters({
                questions: 'questionList',
                loading: 'getLoading'
            }),
            ...mapState({
                loading: state => state.common.loading,
                page: state => state.question.page,
                isOver: state => state.question.isOver,
                isEmpty: state => state.question.isEmpty
            })
        },
        methods: {
            ...mapActions(['getQuestionList']),
            questionFormat: function (question) {
                let _question = {}
                _question.content = question
                _question.time_line_date = question.date
                return _question
            },
            loadMore () {
                let that = this
                console.log(that.loading, that.isOver, that.isEmpty, that.page)
                if (that.loading || that.isOver || that.isEmpty || that.page === 1) {
                    return
                }
                that.getQuestionList({
                    page: that.page,
                    rows: 10
                })
            }
        },
        beforeRouteEnter: function (to, from, next) {
            // transition.next()
            // alert('l')
            next(vm => {
                console.log('vm', vm.$store)
                vm.$store.dispatch('getQuestionList', {
                    page: 1,
                    rows: 10
                })
                // console.log('vm2', vm.$store.state)
            })
            console.log(to, from)
        },
        components: { QuestionModule }
    }
</script>

<style type="text/sass" lang="scss">
    .question-list {
    }
</style>
