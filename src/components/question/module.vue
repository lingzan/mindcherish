<template>
    <router-link class="question-item" :class="questionClass" :to="'/question/' + question.content.id">
        <User user-class="question-item-header" :user="question.content.expert">
            <span class="question-item-time">{{dateFormat(question.content.date)}}</span>
        </User>
        <p class="question-module-title">{{question.content.title}}</p>
        <ModuleQaBox :box="question" />
        <Operate operate-class="question-item-operate">
            <span>{{question.content.visiter_amount}} get</span>
            <span>· {{question.content.good_amount}} 赞</span>
            <router-link :to="'/comment/list/' + question.content.id">· {{question.content.comment_amount}} 评价</router-link>
            <router-link :to="'/classify/' + classify.id" v-for="classify in question.content.classifys"> · #{{classify.name}}</router-link>
        </Operate>
    </router-link>
</template>

<script>
    import User from '../common/user'
    import ModuleQaBox from '../flow/moduleTypeBox'
    import Operate from '../common/operate'
    import Tool from '../../util/tool'
    export default {
        name: 'question-item',
        props: {
            question: '',
            questionClass: ''
        },
        methods: {
            dateFormat (date) {
                return Tool.dateFormat(date)
            }
        },
        components: {ModuleQaBox, User, Operate}
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .question-item {
        display: block;
        padding: 24px 16px 22px;
        margin-top: 10px;

        background: #fff;

        &-time {
            font-size: pxToRem(14);
            color: #9e9e9e;
        }
        &-operate {
            margin-top: 14px;
        }
    }
</style>
