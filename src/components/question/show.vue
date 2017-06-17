<template>
    <div class="question-show">
        <User user-class="question-show-avatar"/>
        <p class="question-show-title">请问你觉得精神和灵魂是一回事吗，怎么如果不是的话有什么区别</p>
        <Qa qa-class="question-show-content" />
        <QuestionOperate><span slot="left">提问价 500 元<em> · </em>104 人技能已get</span><span slot="right"><i class="iconfont icon-thumbs-up"></i>32<i class="iconfont icon-thumbs-down"></i>32</span></QuestionOperate>
    </div>
</template>

<script>
    import Qa from '../../components/question/qa'
    import QuestionOperate from '../../components/question/operate'
    import User from '../../components/common/user'
    export default {
        name: 'question-show',
        props: {
            subnavs: ''
        },
        data () {
            return {
                usernav: [
                    {
                        icon: 'icon-yaowohuida',
                        name: '邀我回答'
                    }
                ]
            }
        },
        computed: {
            sub: function () {
                if (typeof this.subnavs !== 'undefined' && this.subnavs !== '') {
                    return JSON.parse(this.subnavs)
                } else {
                    return []
                }
            }
        },
        components: { Qa, QuestionOperate, User }
    }
</script>

<style type="text/sass" lang="scss">
    .question-show {
        padding: 14px 16px;

        &-avatar {
            margin-bottom: 9px
        }

        &-title {
            margin-bottom: 7px;
            font-size: 16px;
            line-height: 24px;
        }

        &-content {
            margin-bottom: 14px;
        }
    }
</style>
