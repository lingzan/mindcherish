<template>
    <div class="quiz-header">
        <div class="left">
            <slot name="left"/>
            <!-- <i class="iconfont icon-guanbi"></i>取消 -->
        </div>
        <div class="medium">{{title}}</div>
        <div class="right"><slot name="right" class="iconfo" /></div>
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
    @import '../../style/func.scss';
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
                 font-size: pxToRem(12);

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
