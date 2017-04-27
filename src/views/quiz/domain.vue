<template>
    <div>
        <QuizHeader next="#quiz/expert" title="选择领域">
            <span slot="left"><i class="iconfont icon-fanhui" @click="back()"></i>返回</span>
            <div slot="right" @click="nextStep()">下一步</div>
        </QuizHeader>
        <Domain />
    </div>
</template>

<script>
    import Domain from '../../components/common/domain'
    import QuizHeader from '../../components/quiz/header'
    export default {
        name: 'quiz-domain',
        methods: {
            nextStep: function (e) {
                // this.$router.push('/quiz/domain')
                window.location.href = '#quiz/expert'
            },
            back: function () {
                this.$router.go(-1)
            }
        },
        components: { Domain, QuizHeader }
    }
</script>

<style type="text/sass" lang="scss">
    
</style>
