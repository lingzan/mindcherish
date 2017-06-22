<template>
    <div>
        <WellChosen v-for="wellChosen in wellChosens" :wellChosen="wellChosen"/>
        <Question v-for="question in questions" :key="question.id" :question="dataFormat(question)"/>
    </div>
</template>

<script>
    // import SubImgNav from '/components/nav/subimgnav'
    import WellChosen from '../../components/wellChosen/module'
    import Question from '../../components/module/question'
    import {mapGetters} from 'vuex'
    export default {
        name: 'find',
        computed: {
            ...mapGetters({
                questions: 'questionList',
                wellChosens: 'wellChosenList'
            })
        },
        methods: {
            dataFormat (data) {
                let _data = {}
                _data.content = data
                return _data
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('getQuestionList', {
                    flag: 'i',
                    rows: 3,
                    orderby: 'id'
                })
                vm.$store.dispatch('getWellChosenList', {
                    flag: 'i',
                    rows: 3
                })
            })
        },
        components: { WellChosen, Question }
    }
</script>

<style type="text/sass" lang="scss">
    
</style>
