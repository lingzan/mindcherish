<template>
    <div class="msg">
        <!-- <SubNav :subnavs="subnavs" /> -->
        <router-view></router-view>
        <MsgItem msg-item-icon="msg-fans"
                 msg-item-name="我的粉丝"
                 msg-item-url="/msg/fans"/>

        <MsgItem msg-item-icon="msg-focus"
                 msg-item-class="mb10"
                 msg-item-name="我的关注"
                 msg-item-url="/msg/attention"/>

        <MsgItem msg-item-icon="msg-notice" 
                 msg-item-name="系统通知"
                 msg-item-url="/msg/notice"/>

        <MsgItem msg-item-icon="msg-notice"
                 msg-item-class="mb10"
                 msg-item-name="扑克小助手"
                 msg-item-url="/system">
                 <span>在线客服</span>
        </MsgItem>
        <div>
            <Msg v-for="msg in newMsg" :msg="msg" />
        </div>
    </div>

</template>

<script>
    import SubNav from '../../components/nav/subnav'
    import MsgItem from '../../components/msg/column'
    import Msg from '../../components/msg/msg'
    import {mapGetters} from 'vuex'
    export default {
        name: 'msg',
        data () {
            return {
                subnavs: [
                    {'name': '通知', 'url': '/msg/notice'},
                    {'name': '私信', 'url': '/msg/chat'},
                    {'name': '关注', 'url': '/msg/attention'}
                ]
            }
        },
        computed: {
            ...mapGetters(['newMsg'])
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
        &-fans {
            @include imgBg(46px, 46px, '../../assets/icon/icon-msgfans.png')
        }
        &-focus {
            @include imgBg(46px, 46px, '../../assets/icon/icon-msgfocus.png')
        }
        &-notice {
            @include imgBg(46px, 46px, '../../assets/icon/icon-msgnotice.png')
        }
    }
</style>
