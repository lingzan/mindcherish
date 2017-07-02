<template>
    <div class="quiz-expert">
        <QuizHeader title="选择1个智咖提问">
            <span slot="left" @click="back()"><i class="iconfont icon-fanhui"></i>返回</span>
        </QuizHeader>
        <div>
            <Column v-for="i in 10" :key="i" column-class="quiz-expert-column" column-url="ask"  column-img-size="40">
                <div class="quiz-expert-info">
                    <p class="info">礼品 | 浦发银行 投资银行部业务主管</p>
                    <p class="data">提问需 50 元 · 187 回答 · 376 关注</p>
                </div>
            </Column>
        </div>
    </div>    
</template>

<script>
    import QuizHeader from '../../components/quiz/header'
    import Column from '../../components/common/column'

    export default {
        name: 'quiz-expert',
        data () {
            return {}
        },
        methods: {
            back: function () {
                this.$router.go(-1)
            }
        },
        components: { QuizHeader, Column }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    @mixin text-overflow ($clomun) {
        display: -webkit-box;
        -webkit-line-clamp: $clomun;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .quiz-expert {
        &-info {
            height: 40px;
            line-height: 20px;
            margin-left: 52px;
             font-size: pxToRem(15);

            p {
                height: 20px;
                @include text-overflow(1);
            }

            .data {
                 font-size: pxToRem(14);
                color: rgba(0,0,0,.38);
            }
        }
    }
</style>
