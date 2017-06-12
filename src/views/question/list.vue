<template>
    <div>
        <QuestionModule v-for="question in questions" :question="questionFormat(question)"/>
    </div>
</template>

<script>
    import QuestionModule from '../../components/module/question'
    import {mapGetters} from 'vuex'
    export default {
        name: 'question-list',
        computed: mapGetters({
            questions: 'questionList',
            loading: 'getLoading'
        }),
        methods: {
            questionFormat: function (question) {
                let _question = {}
                _question.content = question
                return _question
            }
        },
        beforeRouteEnter: function (to, from, next) {
            // transition.next()
            // alert('l')
            next(vm => {
                console.log('vm', vm.$store)
                vm.$store.dispatch('getQuestionList', 1)
                // console.log('vm2', vm.$store.state)
            })
            console.log(to, from)
        },
        components: { QuestionModule }
    }
</script>
