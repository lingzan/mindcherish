<template>
    <div>
        <QuizHeader next="#quiz/expert" title="选择领域"/>

        <Domain />
    </div>
</template>

<script>
    import Domain from '../../components/common/domain'
    import QuizHeader from '../../components/quiz/header'
    export default {
        name: 'quiz-domain',
        components: { Domain, QuizHeader }
    }
</script>

<style type="text/sass" lang="scss">
    
</style>
