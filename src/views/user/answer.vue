<template>
    <div class="my-answer">
    <!-- {{userLive}} -->
        <Tab :tab="tabs"
             :tab-current="current"
             :tab-click="switchTab"
             tab-class="my-answer-tab"/>
        <section class="my-answer-item" v-for="answer in userAnswer">
            <ModuleHeader :actor="answerFormat(answer)"/>
            <p class="my-answer-title">{{answer.title}}</p>
            <Box v-if="current === 'has_answer'" :box="answerFormat(answer)" />
            <div v-if="current === 'wait_answer'" class="my-answer-btn" ><span>拒绝回答<i class="iconfont icon-dianjijinru"></i></span> <button>换个智咖</button></div>
        </section>
    </div>
</template>

<script>
    import ModuleHeader from '../../components/flow/moduleHeader'
    import Box from '../../components/flow/moduleTypeBox'
    import Tab from '../../components/common/tab'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'my-answer',
        data () {
            return {
                tabs: [
                    { name: '待回答', type: 'wait_answer' },
                    { name: '已回答', type: 'has_answer' },
                    { name: '已拒绝', type: 'has_refuse' }
                ],
                current: 'wait_answer'
            }
        },
        computed: {
            ...mapGetters(['userAnswer'])
        },
        methods: {
            ...mapActions({getUserAnswer: 'userAnswer'}),
            switchTab (name) {
                if (this.current === name) {
                    return
                }
                // article|reward_answer|expert_question|live
                this.current = name
                const user = this.$store.state.account.userLicense
                let _data = {}
                _data.page = 1
                _data.rows = 10
                _data.expert_userid = this.$route.params.id
                _data.invite_status = this.current
                _data.user_id = this.$route.params.id
                _data.user_token = user.user_token
                this.getUserAnswer(_data)
            },
            answerFormat (answer) {
                let _answer = {}
                _answer.content = answer
                _answer.time_line_date = answer.date
                return _answer
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                const user = vm.$store.state.account.userLicense
                const userId = to.params.id ? to.params.id : user.user_id
                vm.$store.dispatch('userAnswer', {
                    page: 1,
                    rows: 10,
                    expert_userid: to.params.id,
                    invite_status: 'wait_answer',
                    user_id: userId,
                    user_token: user.user_token
                })
            })
        },
        components: {ModuleHeader, Box, Tab}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/mixin.scss';
    @import '../../style/func.scss';
    .my-answer {
        background: #f2f2f2;
        &-tab {
            margin-bottom: 10px;
        }
        &-item {
            padding: 16px 16px 10px;
            background: #fff;
            margin-bottom: 10px;
        }
        &-title {
            margin: 7px 0 9px;

            @include textOverflow(3)
        }
        &-btn {
            min-height: 27px;
            padding: 12px 16px 2px;
            margin: 0 -16px;

            line-height: 27px;
            font-size: pxToRem(14);
            color: rgba(0, 0, 0, 0.38);
            border-top: 1px solid #f2f2f2;

            button {
                float: right;
                height: 27px;
                padding: 0 13px;

                color: #fff;
                line-height: 27px;
                background: #ffa42f;
                border-radius: 2px;
            }
        }
    }
</style>
