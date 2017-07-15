<template>
    <div class="classify-detail">
        <header>
            <!-- {{classify}} -->
            <nav></nav>
            <div class="classify-detail-header">
                <h2>{{classify.name}}</h2>
                <Focus focus-class="classify-detail-focus"/>
                <Tab :tab="tab"
                     :tab-current="tabCurrent"
                     :tab-click="switchTab"
                     tab-class="classify-detail-tab"/>
            </div>
        </header>
        <div class="classify-detail-content">
            <div v-if="tabCurrent === 'getClassifyArticle'">
                <Articles :article="articleFormat(article)" v-for="article in classifyArticle" :key="article.id"/>
            </div>
            <div v-if="tabCurrent === 'getClassifyExpert'">
                <div v-for="user in classifyExpert" :key="user.id" class="classify-detail-expert">
                    <Expert :expert="user.expert_user"/>
                </div>
            </div>
            <div v-if="tabCurrent === 'getClassifyQuestion'">
                <Question :question="questionFormat(question)" v-for="question in classifyQuestion" :key="question.id"/>
            </div>
            <div v-if="tabCurrent === 'getClassifyLive'">
                <Live live-class="classify-detail-live" :live="liveFormat(live)" v-for="live in classifyLive" :key="live.id"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Tab from '../../components/common/tab'
    import Question from '../../components/question/module'
    import Articles from '../../components/article/module'
    import Live from '../../components/live/module'
    import Expert from '../../components/expert/info'
    import Operate from '../../components/common/operate'
    import Focus from '../../components/common/focus'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'classify-detail',
        data () {
            return {
                tab: [
                    {name: '问答', type: 'getClassifyQuestion'},
                    {name: '智咖', type: 'getClassifyExpert'},
                    {name: '文章', type: 'getClassifyArticle'},
                    {name: 'Live', type: 'getClassifyLive'}
                ],
                tabCurrent: 'getClassifyQuestion'
            }
        },
        computed: {
            ...mapGetters(['classify', 'classifyQuestion', 'classifyExpert', 'classifyArticle', 'classifyLive'])
        },
        methods: {
            ...mapActions(['getClassifyQuestion', 'getClassifyExpert', 'getClassifyArticle', 'getClassifyLive']),
            switchTab (name) {
                this.tabCurrent = name
                this[name]({
                    classifyid: this.$route.params.id,
                    get_userstat: 1,
                    flag_order: 'c',
                    page: 1
                })
            },
            questionFormat (question) {
                let _question = {}
                _question.content = question.question_info
                return _question
            },
            articleFormat (article) {
                let _article = {}
                _article = article.article_info
                return _article
            },
            liveFormat (live) {
                let _live = {}
                _live = live.live_info
                return _live
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('getClassify', {id: to.params.id})
            })
        },
        components: { Tab, Question, Articles, Live, Expert, Operate, Focus }
    }
</script>

<style type="text/sass" lang="scss">
    .classify {
        &-detail {
            &-header {
                background: url(../../assets/images/special.jpg) no-repeat;
                background-size: 100% 100%;

                h2 {
                    padding: 52px 0 21px;

                    line-height: 28px;
                    font-size: 24px;
                    font-weight: 500;
                    text-align: center;
                    color: #fff;
                }
            }
            &-focus {
                margin: 0 auto 30px;
            }
            &-tab {
                background: transparent !important;
                ul li {
                    color: rgba(255, 255, 255, .7) !important;
                    &.active {
                        color: #ffa42f !important;
                    }
                }
            }
            &-content {
                overflow: hidden;
                background: #f2f2f2;
            }
            &-live {
                margin-top: 10px;
            }
            &-expert {
                padding: 16px;
                margin-top: 10px;

                background: #fff;
            }
            &-user {
                &-statics {
                    margin: 10px 0 0 50px;
                }
            }
        }
    }
</style>
