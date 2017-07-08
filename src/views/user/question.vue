<template>
    <div class="my-question">
        <Tab :tab="tab" :tab-class="tabClass" :tab-click="switchTab" :tab-current="tabCurrent"/>  
        <section class="my-question-item" v-for="item in userQuestion">
        <!-- {{item}} -->
            <ModuleHeader :actor="questionFormat(item)"/>
            <p class="my-question-title">{{item.title}}</p>
            <div v-if="item.status === '0'">
                <div class="my-question-btn" >提醒智咖及时回答问题 <button>发个提醒</button></div>
            </div>
            <div v-if="item.status === '1'">
                <ModuleQaBox :box="questionFormat(item)"/>
                <Operate operate-class="my-question-operate">
                    <span>{{item.visiter_amount}} get</span>
                    <span>· {{item.good_amount}} 赞</span>
                    <a :href="item.id">· {{item.comment_amount}} 评价</a>
                    <a :href="classify.id" v-for="classify in item.classifys"> · #{{classify.name}}</a>
                </Operate>
                <div class="my-question-btn" >您可换个智咖再提问一次 <button>立即追问</button></div>
            </div>
            <div v-if="item.status === '2'">
                <p class="my-question-reason">{{item.refuse_reason}}</p>
                <div class="my-question-btn" >您可换个智咖再提问一次 <button>换个智咖</button></div>
            </div>
        </section>
    </div>
</template>

<script>
    import LiveModule from '../../components/live/module'
    import ModuleHeader from '../../components/flow/moduleHeader'
    import ModuleQaBox from '../../components/flow/moduleTypeBox'
    import Operate from '../../components/common/operate'
    import Tab from '../../components/common/tabHeader'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'my-question',
        data () {
            return {
                tabClass: 'my-question-tab',
                tabCurrent: 'wait_answer'
            }
        },
        computed: {
            ...mapGetters(['userQuestion']),
            tab () {
                const tabs = [
                    {name: '待回答', type: 'wait_answer'},
                    {name: '已回答', type: 'has_answer'},
                    {name: '已拒绝', type: 'has_refuse'},
                    {name: '已过期', type: 'has_expire'}
                ]
                return tabs
            }
        },
        methods: {
            ...mapActions({getData: 'userQuestion'}),
            switchTab (name) {
                this.tabCurrent = name
                console.log(this.$route)
                this.getData({
                    page: 1,
                    rows: 6,
                    invite_status: this.tabCurrent,
                    questioner_userid: this.$route.params.id
                })
            },
            questionFormat (question) {
                let _question = {}
                _question.content = question
                _question.time_line_date = question.date
                return _question
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                const id = to.params.id
                vm.$store.dispatch('userQuestion', {
                    page: 1,
                    rows: 6,
                    invite_status: 'wait_answer',
                    questioner_userid: id
                })
            })
        },
        components: {LiveModule, Tab, ModuleHeader, ModuleQaBox, Operate}
    }
</script>

<style type="text/sass" lang="scss" >
    @import '../../style/func.scss';
    .my-question {
        background: #f2f2f2;
        &-item {
            padding: 13px 16px 0;
            margin-top: 10px;

            background: #fff;
            color: rgba(0, 0, 0, 0.87);
        }
        &-title {
            margin: 6px 0;
            line-height: 21px;
        }
        &-reason {
            margin-bottom: 15px;

            font-size: pxToRem(14);
            color: rgba(0,0,0,.38);
        }
        &-btn {
            min-height: 27px;
            padding: 12px 16px;
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
        &-operate {
            margin: 9px 0 15px;
        }
        &-tab {
            color: rgba(0, 0, 0, 0.87);
        }
    }
</style>
