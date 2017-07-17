<template>
    <div class="msg-fans-list" v-infinite-scroll="loadMore">
        <User v-for="fan in msgFans" :user="fan.fan_userinfo" :key="fan.id" user-class="msg-fans-list-avatar"/>
        <loading-notice-component :is-over="isOver" :is-empty="isEmpty" overText="已加载全部" emptyText="空状态"/>
    </div>
</template>

<script>
    import User from '../../components/common/user'
    import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
        name: 'msg-fans',
        computed: {
            ...mapGetters(['msgFans', 'getUserLicense']),
            ...mapState({
                loading: state => state.common.loading,
                page: state => state.msg.msgFansPage,
                isOver: state => state.msg.msgFansIsOver,
                isEmpty: state => state.msg.msgFansIsEmpty
            })
        },
        methods: {
            ...mapActions(['getMsgFans']),
            loadMore () {
                let that = this
                if (that.loading || that.isOver || that.isEmpty || that.page === 1) {
                    return
                }
                that.getMsgFans({
                    page: that.page,
                    action: 'fan',
                    attention_userid: that.getUserLicense.user_id,
                    user_id: that.getUserLicense.user_id,
                    user_token: that.getUserLicense.user_token
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                const user = vm.$store.state.account.userLicense
                const userId = to.params.id ? to.params.id : user.user_id
                vm.$store.dispatch('getMsgFans', {
                    page: 1,
                    action: 'fan',
                    attention_userid: userId,
                    user_id: userId,
                    user_token: user.user_token
                })
            })
        },
        components: { User }
    }
</script>

<style type="text/sass" lang="scss">
    .msg-fans-list {

        &-avatar {
            padding: 16px;
            border-bottom: 1px solid #f2f2f2;
        }
    }
</style>
