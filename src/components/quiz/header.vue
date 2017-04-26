<template>
    <div class="quiz-header">
        <div class="left">
            <i class="iconfont icon-guanbi"></i>取消
        </div>
        <div class="medium">{{title}}</div>
        <div class="right active" @click="nextStep()">下一步</div>
    </div>
</template>

<script>
    export default {
        name: 'quiz-header',
        data () {
            return {
                question: '',
                test: ''
            }
        },
        props: {
            next: '',
            title: ''
        },
        methods: {
            nextStep: function (e) {
                // this.$router.push('/quiz/domain')
                window.location.href = this.next
            }
        }
    }
</script>

<style type="text/sass" lang="scss">
    .quiz-header {
        position: relative;
        height: 51px;

        line-height: 51px;
        border-bottom: 1px solid #f2f2f2;
        background-color: #fff;
        text-align: center;
        .left { 
            position: absolute;
            left: 16px;
            top: 50%;

            transform: translateY(-50%);

            i {
                position: relative;
                top: -1px;
                margin-right: 9px;
                font-size: 12px;

            }
        }
        .right {
            position: absolute;
            right: 16px;
            top: 50%;

            transform: translateY(-50%);
            color: rgba(0, 0, 0, 0.25);

            &.active {
                color: rgba(0, 0, 0, 0.87);
            }
        }
    }
</style>
