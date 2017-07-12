<template>
    <div class="question-module" :class="questionClass">
        <ModuleHeader :actor="question"/>
        <router-link :to="'/question/' + question.content.id">
            <p class="question-module-title">{{question.content.title}}</p>
            <ModuleQaBox :box="question" />
        </router-link>
        <Operate operate-class="question-module-operate">
            <span>{{question.content.visiter_amount}} get</span>
            <span>· {{question.content.good_amount}} 赞</span>
            <a :href="question.content.id">· {{question.content.comment_amount}} 评价</a>
            <a :href="classify.id" v-for="classify in question.content.classifys"> · #{{classify.name}}</a>
        </Operate>
    </div>
</template>

<script>
    import ModuleHeader from '../flow/moduleHeader'
    import ModuleQaBox from '../flow/moduleTypeBox'
    import Operate from '../../components/common/operate'

    export default {
        name: 'question-module',
        props: {
            question: '',
            questionClass: ''
        },
        computed: {
        },
        components: { ModuleHeader, Operate, ModuleQaBox }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    .question-module {
        padding: 14px 16px;
        margin-top: 10px;
        background: #fff;

        &-title {
            margin: 4px 0 10px;
            line-height: 24px;

            @include textOverflow(3)
        }
        &-operate {
            margin-top: 20px;
        }
    }
</style>
