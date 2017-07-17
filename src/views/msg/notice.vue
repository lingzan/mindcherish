<template>
    <div class="msg-notice" v-infinite-scroll="loadMore">
        <Notice v-for="notice in msgNotice" :notice="notice" :key="notice"/>
        <loading-notice-component :is-over="isOver" :is-empty="isEmpty" overText="已加载全部" emptyText="空状态"/>
    </div>
</template>

<script>
    import Notice from '../../components/msg/notice'
    import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
        name: 'msg-notice',
        data () {
            return {
            }
        },
        computed: {
            ...mapGetters(['msgNotice', 'getUserLicense']),
            ...mapState({
                loading: state => state.common.loading,
                page: state => state.msg.msgNoticePage,
                isOver: state => state.msg.msgNoticeIsOver,
                isEmpty: state => state.msg.msgNoticeIsEmpty
            })
        },
        methods: {
            ...mapActions(['getMsgNotice']),
            loadMore () {
                let that = this
                if (that.loading || that.isOver || that.isEmpty || that.page === 1) {
                    return
                }
                that.getMsgNotice({
                    page: that.page,
                    user_id: that.getUserLicense.user_id,
                    user_token: that.getUserLicense.user_token
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                const user = vm.$store.state.account.userLicense
                const userId = to.params.id ? to.params.id : user.user_id
                vm.$store.dispatch('getMsgNotice', {
                    page: 1,
                    user_id: userId,
                    user_token: user.user_token
                })
            })
        },
        components: { Notice }
    }
</script>

<style type="text/sass" lang="scss">
   .msg-notice {
        background: #f2f2f2;
   }
</style>
