<template>
    <div class="detail">
        <div class="detail-question">
            <div class="detail-questioner">
                <avatar :avatar-url="question.questioner.face" avatar-class="detail-questioner-avatar"/>
                <span class="detail-questioner-name">{{question.questioner.nickname}} {{times}}提问</span>
            </div>
            <h2 class="detail-question-title">{{question.title}}</h2>
            <User :user="question.expert" user-class="detail-question-expert"><span slot="mark">{{question.expert.company}}</span><span></span></User>
            <Qa qa-class="detail-question-content"/>
            <Operate>{{answerTime}} · {{question.visiter_amount}} get
                <router-link :to="'/classify/' + classify.id" v-for="classify in question.classifys" :key="classify.id"> · #{{classify.name}}</router-link>
            </Operate>
        </div>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'
    import User from '../../components/common/user'
    import Qa from '../../components/question/qa'
    import Operate from '../../components/common/operate'
    import Tool from '../../util/tool'
    import {mapGetters} from 'vuex'
    console.log(Tool)
    export default {
        name: 'question-detail',
        computed: {
            ...mapGetters({
                question: 'question'
            }),
            times: function () {
                return Tool.dateFormat(this.question.date)
            },
            answerTime: function () {
                return Tool.dateFormat(this.question.answer.date)
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                console.log(to)
                vm.$store.dispatch('getQuestion', to.params.id)
            })
        },
        components: { User, Qa, Avatar, Operate }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    .detail {
        &-question {
            padding: 15px 16px;
            border-bottom: 1px solid #f2f2f2;

            &-title{
                margin-top: 8px;

                line-height: 24px;
                font-size: 16px;
                font-weight: 500;
            }

            &-expert {
                margin: 10px 0 12px;
            }

            &-content {
                margin-bottom: 12px
            }
        }
        &-questioner {
            line-height: 20px;
            font-size: 13px;

            &-avatar {
                float: left;
            }

            &-name {
                margin-left: 5px;
            }
        }   
    }    
</style>
