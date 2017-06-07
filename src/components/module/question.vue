<template>
    <div class="question-module">
    <!-- {{question.actor}} -->
        <ModuleHeader :actor="question"/>
        <p class="title">{{question.content.title}}</p>
        <Operate>
            <span>{{question.content.visiter_amount}} get</span>
            <span>· {{question.content.good_amount}} 赞</span>
            <a :href="question.content.id">· {{question.content.comment_amount}} 评价</a>
            <a :href="classify.id" v-for="classify in question.content.classifys">3</a>
        </Operate>
    </div>
</template>

<script>
    import ModuleHeader from '../flow/moduleHeader'
    import Operate from '../../components/common/operate'

    export default {
        name: 'question-module',
        props: {
            question: ''
        },
        data () {
            return {
            }
        },
        computed: {
        },
        components: { ModuleHeader, Operate }
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
