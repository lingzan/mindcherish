<template>
    <div class="question-module">
        <slot><div class="clearfix question-module-header"><Avatar imgsize='20'img-class="question-module-avatar"/><span class="question-module-author">张昭 回答了问题</span> <span class="fr">7 分钟前</span></div></slot>
        <router-link to="/question/detail">
            <p class="question-module-title">请问你觉得精神和灵魂是一回事吗，怎么如果不是的话有什么区别</p>
        </router-link>
        <Qa qa-class="question-module-content" />
        <QuestionOperate><span slot="left">提问价 500 元<em> · </em>104 人技能已get</span><span slot="right"><i class="iconfont icon-thumbs-up"></i>32<i class="iconfont icon-thumbs-down"></i>32</span></QuestionOperate>
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
    .question-module {
        padding: 14px 16px;
        margin-bottom: 10px;
        background: #fff;

        &:last-child {
            margin-bottom: 0;
        }
        
        &-header {
            height: 20px;
            line-height: 20px;
            font-size: 13px;
            margin-bottom: 9px;

        }

        &-avatar {
            float: left;
        }
        
        &-author {
            margin-left: 3px; 
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
