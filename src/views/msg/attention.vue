<template>
    <div class="msg-focus-list">
        <Tab :tab='tab'
             :tab-current='tabCurrent'
             :tab-click='switchTab'/>   
        <User v-for="fan in msgData" :user="userFormat(fan)" :key="fan.id" user-class="msg-focus-list-avatar"/>
        <DomainColumn v-for="fan in msgData" :user="userFormat(fan)" :key="fan.id" user-class="msg-focus-list-avatar"/>
        <User v-for="fan in msgData" :user="userFormat(fan)" :key="fan.id" user-class="msg-focus-list-avatar"/>
    </div>
</template>

<script>
    import User from '../../components/common/user'
    import Tab from '../../components/common/tab'
    import DomainColumn from '../../components/msg/domainColumn'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'msg-focus',
        data () {
            return {
                tab: [
                    {name: '用户', type: 'user'},
                    {name: '领域', type: 'domain'},
                    {name: '机构', type: 'instruct'}
                ],
                tabCurrent: 'user'
            }
        },
        computed: {
            ...mapGetters(['msgFocus', 'msgDomain', 'msgInstr', 'getUserLicense']),
            msgData () {
                let _msgData = []
                if (this.tabCurrent === 'user') {
                    _msgData = this.msgFocus
                } else if (this.tabCurrent === 'domain') {
                    _msgData = this.msgDomain
                } else {
                    _msgData = this.msgInstr
                }
                return _msgData
            }
        },
        methods: {
            ...mapActions(['getMsgFocus', 'getMsgDomain', 'getMsgInstr']),
            switchTab (name) {
                let that = this
                that.tabCurrent = name
                let _data = {
                    attention_userid: that.getUserLicense.user_id,
                    page: 1,
                    rows: 10
                }
                if (name === 'user') {
                    that.getMsgFocus(_data)
                } else if (name === 'domain') {
                    that.getMsgDomain(_data)
                } else {
                    that.getMsgInstr(_data)
                }
            },
            userFormat (user) {
                let _user = {}
                if (this.tabCurrent === 'user') {
                    _user = user.attention_userinfo
                } else if (this.tabCurrent === 'domain') {
                    _user = user
                } else {
                    _user = user
                }
                return _user
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                const user = vm.$store.state.account.userLicense
                const userId = to.params.id ? to.params.id : user.user_id
                vm.$store.dispatch('getMsgFocus', {
                    page: 1,
                    attention_userid: userId,
                    user_id: userId,
                    user_token: user.user_token
                })
            })
        },
        components: { User, Tab, DomainColumn }
    }
</script>

<style type="text/sass" lang="scss">
    .msg-focus-list {

        &-avatar {
            padding: 16px;
            border-bottom: 1px solid #f2f2f2;
        }
    }
</style>
