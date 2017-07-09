<template>
    <div class="my-collect">
    <!-- {{userLive}} -->
        <Tab :tab="tabs"
             :tab-current="current"
             :tab-click="switchTab"
             tab-class="my-collect-tab"/>
        <section class="my-collect-item" v-for="collect in userCollect">
            <ArticleModule v-if="current === 'article'" :article="collect"/>
            <QuestionModule v-if="current === 'expert_question'" :question="collect" />
            <LiveModule v-if="current === 'live'" :liveData="collect.content"/>
        </section>
    </div>
</template>

<script>
    import ArticleModule from '../../components/article/module'
    import LiveModule from '../../components/live/module'
    import QuestionModule from '../../components/question/module'

    import Tab from '../../components/common/tab'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'my-collect',
        data () {
            return {
                tabs: [
                    { name: '文章', type: 'article' },
                    { name: '悬赏', type: 'reward_answer' },
                    { name: '问答', type: 'expert_question' },
                    { name: 'Live', type: 'live' }
                ],
                current: 'article'
            }
        },
        computed: {
            ...mapGetters(['userCollect'])
        },
        methods: {
            ...mapActions({getUserCollect: 'userCollect'}),
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
                _data.favoriter_userid = this.$route.params.id
                _data.arctype = this.current
                _data.user_id = this.$route.params.id
                _data.user_token = user.user_token
                this.getUserCollect(_data)
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
            //      author_userid 用户id
            // @var article_status  1|0
                const user = vm.$store.state.account.userLicense
                const userId = to.params.id ? to.params.id : user.user_id
                vm.$store.dispatch('userCollect', {
                    page: 1,
                    rows: 10,
                    favoriter_userid: to.params.id,
                    arctype: 'article',
                    user_id: userId,
                    user_token: user.user_token
                })
            })
        },
        components: {ArticleModule, QuestionModule, LiveModule, Tab}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    .my-collect {
        background: #f2f2f2;
        &-tab {
            margin-bottom: 10px;
        }
        &-item {
            padding: 16px;
            background: #fff;
            margin-bottom: 10px;
        }
    }
</style>

