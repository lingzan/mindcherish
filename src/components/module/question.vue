<template>
    <div class="question-module">
        <ModuleHeader user="{'face': ''}"/>
        <p class="title">易哥您好，昨天3405空螺被深套，您分析说有一次回踩3400调整，今天小赚平仓后又大涨回来了，现货高位回落，并且持仓主力空头没有退...</p>
        <Operate>
            <span>3</span><span>3</span><span>3</span><span>3</span>
        </Operate>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'
    import Qa from '../../components/question/qa'
    import QuestionOperate from '../../components/question/operate'
    import User from '../../components/common/User'

    export default {
        name: 'question-module',
        props: {
            subnavs: ''
        },
        data () {
            return {
            }
        },
        computed: {
        },
        components: { Avatar, Qa, QuestionOperate, User }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    .question-module {
        padding: 14px 16px;
        margin-bottom: 10px;
        background: #fff;

        .title {
            margin: 4px 0 13px;
            line-height: 24px;

            @include textOverflow(3)
        }
    }
</style>
