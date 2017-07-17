<template>
    <div class="msg" v-infinite-scroll="loadMore">
        <!-- <SubNav :subnavs="subnavs" /> -->
        <MsgItem msg-item-icon="msg-fans-column"
                 msg-item-name="我的粉丝"
                 msg-item-url="/msg/fans"/>

        <MsgItem msg-item-icon="msg-focus-column"
                 msg-item-class="mb10"
                 msg-item-name="我的关注"
                 msg-item-url="/msg/attention"/>

        <MsgItem msg-item-icon="msg-notice-column" 
                 msg-item-name="系统通知"
                 msg-item-url="/msg/notice"/>

        <MsgItem msg-item-icon="msg-notice-column"
                 msg-item-class="mb10"
                 msg-item-name="扑克小助手"
                 msg-item-url="/msg/chat/10002">
                 <span>在线客服</span>
        </MsgItem>
        <div>
            <Msg v-for="msg in newMsg" :msg="msg" :key="msg.id"/>
        </div>
        <loading-notice-component :is-over="isOver" :is-empty="isEmpty" overText="已加载全部" emptyText="空状态"/>
    </div>

</template>

<script>
    import SubNav from '../../components/nav/subnav'
    import MsgItem from '../../components/msg/column'
    import Msg from '../../components/msg/msg'
    import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
        name: 'msg',
        data () {
        },
        computed: {
            ...mapGetters(['newMsg', 'getUserLicense']),
            ...mapState({
                loading: state => state.common.loading,
                page: state => state.msg.page,
                isOver: state => state.msg.isOver,
                isEmpty: state => state.msg.isEmpty
            })
        },
        methods: {
            ...mapActions(['getNewMsg']),
            loadMore () {
                let that = this
                if (that.loading || that.isOver || that.isEmpty || that.page === 1) {
                    return
                }
                that.getNewMsg({
                    page: that.page,
                    get_livemsg: 1,
                    orderby: 'msgtime',
                    user_id: that.getUserLicense.user_id,
                    user_token: that.getUserLicense.user_token
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                const user = vm.$store.state.account.userLicense
                const userId = to.params.id ? to.params.id : user.user_id
                vm.$store.dispatch('getNewMsg', {
                    page: 1,
                    get_livemsg: 1,
                    orderby: 'msgtime',
                    user_id: userId,
                    user_token: user.user_token
                })
            })
        },
        components: { SubNav, MsgItem, Msg }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    @import '../../style/func.scss';
    .msg {
        background: #f2f2f2;
        &-fans-column {
            @include imgBg(46px, 46px, '../../assets/icon/icon-msgfans.png')
        }
        &-focus-column {
            @include imgBg(46px, 46px, '../../assets/icon/icon-msgfocus.png')
        }
        &-notice-column {
            @include imgBg(46px, 46px, '../../assets/icon/icon-msgnotice.png')
        }
    }
</style>
